import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IndustryChangeApp as IndustryChangeAppSchema } from './schemas/industryChangeApp.schema';
import { CreateIndustryChangeAppDto } from './dto/create-industry-change-app.dto';
import { FindIndustryChangeAppsDto } from './dto/find-industry-change-apps.dto';
import { ResidentService } from 'src/resident/resident.service';
import { TypeOfRegistration, Status as ResidentStatus } from 'src/resident/interfaces/resident.interface';
import {
    IndustryChangeApp,
    Status as IndustryChangeAppStatus,
    ObjectStatus as IndustryChangeAppObjectStatus,
} from './interfaces/industryChangeApp.interface';

@Injectable()
export class IndustryChangeAppService {
    constructor(
        private residentService: ResidentService,
        @InjectModel(IndustryChangeAppSchema.name)
        private industryChangeAppModel: Model<IndustryChangeAppSchema>,
    ) {}

    async create(createIndustryChangeAppDto: CreateIndustryChangeAppDto): Promise<IndustryChangeAppSchema> {
        const { residentSub: sub, ...comparableProperties } = createIndustryChangeAppDto;

        const resident = await this.residentService.findBySub(sub);

        if (!resident) {
            throw new HttpException(`Resident with id '${sub}' does not exist.`, HttpStatus.NOT_FOUND);
        }

        const { typeOfRegistration, status } = resident;

        if (typeOfRegistration === TypeOfRegistration.limitedEResidency || status === ResidentStatus.inactive) {
            throw new HttpException('Resident has limited e-residency or is inactive.', HttpStatus.NOT_ACCEPTABLE);
        }

        let isSame: Boolean = true;
        for (const [key, value] of Object.entries(comparableProperties)) {
            if (value !== resident[key]) isSame = false;
        }
        if (isSame) {
            throw new HttpException(
                `Requested industry information is already the same as resident's current industry information.`,
                HttpStatus.NOT_ACCEPTABLE,
            );
        }

        const decidedAt = createIndustryChangeAppDto.willWorkInPhysicalJurisdiction ? null : new Date();
        const decidedBy = createIndustryChangeAppDto.willWorkInPhysicalJurisdiction ? null : 'John Doe';
        const industryChangeAppStatus = createIndustryChangeAppDto.willWorkInPhysicalJurisdiction
            ? IndustryChangeAppStatus.inReview
            : IndustryChangeAppStatus.approved;

        const newIndustryChangeApp: IndustryChangeApp = {
            residentSub: sub,
            current: {
                willWorkInPhysicalJurisdiction: resident.willWorkInPhysicalJurisdiction,
                industry: resident.industry,
                regulatoryElection: resident.regulatoryElection,
                regulatoryElectionSub: resident.regulatoryElectionSub,
            },
            required: {
                willWorkInPhysicalJurisdiction: createIndustryChangeAppDto.willWorkInPhysicalJurisdiction,
                industry: createIndustryChangeAppDto.industry,
                regulatoryElection: createIndustryChangeAppDto.regulatoryElection,
                regulatoryElectionSub: createIndustryChangeAppDto.regulatoryElectionSub,
            },
            status: industryChangeAppStatus,
            submittedAt: new Date(),
            decision: {
                decidedAt,
                decidedBy,
                rejectionReason: null,
            },
            createdBy: sub,
            updatedBy: sub,
            objectStatus: IndustryChangeAppObjectStatus.current,
        };

        const createdIndustryChangeApp = new this.industryChangeAppModel(newIndustryChangeApp);

        if (industryChangeAppStatus === IndustryChangeAppStatus.approved) {
            this.residentService.updateResidentIndustry(sub, {
                willWorkInPhysicalJurisdiction: createIndustryChangeAppDto.willWorkInPhysicalJurisdiction,
                industry: createIndustryChangeAppDto.industry || null,
                regulatoryElection: createIndustryChangeAppDto.regulatoryElection || null,
                regulatoryElectionSub: createIndustryChangeAppDto.regulatoryElectionSub || null,
            });
        }

        return createdIndustryChangeApp.save();
    }

    async findById(id: string): Promise<IndustryChangeAppSchema> {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            throw new HttpException('Requested id is not an ObjectId.', HttpStatus.BAD_REQUEST);
        }

        const foundApplication = await this.industryChangeAppModel.findOne({
            _id: id,
            objectStatus: IndustryChangeAppObjectStatus.current,
        });

        if (!foundApplication) {
            throw new HttpException(
                `Industry change application with id '${id}' does not exist.`,
                HttpStatus.NOT_FOUND,
            );
        }

        return foundApplication;
    }

    async find(findIndustryChangeAppsDto: FindIndustryChangeAppsDto): Promise<IndustryChangeAppSchema[]> {
        const foundApplications = [];
        const { statuses, residentSub } = findIndustryChangeAppsDto;

        for (const status of statuses) {
            const newApps = await this.industryChangeAppModel.find({
                residentSub,
                status,
                objectStatus: IndustryChangeAppObjectStatus.current,
            });
            foundApplications.push(...newApps);
        }

        if (!foundApplications.length) {
            throw new HttpException(`Couldn't find any applications.`, HttpStatus.NOT_FOUND);
        }

        return foundApplications;
    }

    async deleteById(id: string): Promise<IndustryChangeAppSchema> {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            throw new HttpException('Requested id is not an ObjectId.', HttpStatus.BAD_REQUEST);
        }

        const foundApplication = await this.industryChangeAppModel.findOneAndUpdate(
            {
                _id: id,
                status: IndustryChangeAppStatus.inReview,
                objectStatus: IndustryChangeAppObjectStatus.current,
            },
            { objectStatus: IndustryChangeAppObjectStatus.deleted },
            { new: true },
        );

        if (!foundApplication) {
            throw new HttpException(
                `In review industry change application with id '${id}' does not exist.`,
                HttpStatus.NOT_FOUND,
            );
        }

        return foundApplication;
    }
}
