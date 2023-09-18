import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IndustryChangeApp } from './schemas/industryChangeApp.schema';
import { CreateIndustryChangeAppDto } from './dto/create-industry-change-app.dto';
import { ResidentService } from 'src/resident/resident.service';
import { TypeOfRegistration, Status } from 'src/resident/interfaces/resident.interface';

@Injectable()
export class IndustryChangeAppService {
    constructor(
        private residentService: ResidentService,
        @InjectModel(IndustryChangeApp.name)
        private industryChangeAppModel: Model<IndustryChangeApp>,
    ) {}

    async create(createIndustryChangeAppDto: CreateIndustryChangeAppDto): Promise<IndustryChangeApp> {
        const { residentSub: sub } = createIndustryChangeAppDto;

        const resident = await this.residentService.findResidentBySub(sub);

        if (!resident) {
            throw new HttpException(`Resident with id '${sub}' does not exist.`, HttpStatus.NOT_FOUND);
        }

        const { typeOfRegistration, status } = resident;

        if (typeOfRegistration === TypeOfRegistration.limitedEResidency || status === Status.inactive) {
            throw new HttpException(`Resident has limited e-residency or is inactive.`, HttpStatus.NOT_ACCEPTABLE);
        }

        const createdIndustryChangeApp = new this.industryChangeAppModel(createIndustryChangeAppDto);
        return createdIndustryChangeApp.save();
    }
}
