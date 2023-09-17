import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IndustryChangeApplication } from './schemas/industryChangeApplication.schema';
import { CreateIndustryChangeApplicationDto } from './dto/create-industry-change-application.dto';

@Injectable()
export class IndustryChangeApplicationService {
    constructor(@InjectModel(IndustryChangeApplication.name) private industryChangeApplicationModel: Model<IndustryChangeApplication>) { }

    async create(createIndustryChangeApplicationDto: CreateIndustryChangeApplicationDto): Promise<IndustryChangeApplication> {
        const createdIndustryChangeApplication = new this.industryChangeApplicationModel(createIndustryChangeApplicationDto);

        return createdIndustryChangeApplication.save();
    }
}
