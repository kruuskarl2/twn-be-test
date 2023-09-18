import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IndustryChangeApplication } from './schemas/industryChangeApplication.schema';
import { CreateIndustryChangeApplicationDto } from './dto/create-industry-change-application.dto';
import { ResidentService } from 'src/resident/resident.service';
import { TypeOfRegistration, Status } from 'src/resident/interfaces/resident.interface';

@Injectable()
export class IndustryChangeApplicationService {
    constructor(
        private residentService: ResidentService,
        @InjectModel(IndustryChangeApplication.name)
        private industryChangeApplicationModel: Model<IndustryChangeApplication>,
    ) {}

    async create(
        createIndustryChangeApplicationDto: CreateIndustryChangeApplicationDto,
    ): Promise<IndustryChangeApplication> {
        const { residentSub: sub } = createIndustryChangeApplicationDto;

        const resident = await this.residentService.findResidentBySub(sub);

        if (!resident) {
            throw new HttpException(`Resident with id '${sub}' does not exist.`, HttpStatus.NOT_FOUND);
        }

        const { typeOfRegistration, status } = resident;

        if (typeOfRegistration === TypeOfRegistration.limitedEResidency || status === Status.inactive) {
            throw new HttpException(`Resident has limited e-residency or is inactive.`, HttpStatus.NOT_ACCEPTABLE);
        }

        const createdIndustryChangeApplication = new this.industryChangeApplicationModel(
            createIndustryChangeApplicationDto,
        );
        return createdIndustryChangeApplication.save();
    }
}
