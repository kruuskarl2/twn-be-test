import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Resident } from './schemas/resident.schema';
import { UpdateResidentIndustryDto } from './dto/update-resident-industry.dto';

@Injectable()
export class ResidentService {
    constructor(@InjectModel(Resident.name) private residentModel: Model<Resident>) {}

    async findBySub(sub: string): Promise<Resident> {
        return await this.residentModel.findOne({ sub });
    }

    async updateResidentIndustry(sub: string, updateResidentIndustryDto: UpdateResidentIndustryDto): Promise<Resident> {
        const existingResident = await this.residentModel.findOneAndUpdate({ sub }, updateResidentIndustryDto, {
            new: true,
        });
        return existingResident;
    }
}
