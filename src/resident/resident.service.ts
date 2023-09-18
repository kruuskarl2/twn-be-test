import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Resident } from './schemas/resident.schema';

@Injectable()
export class ResidentService {
    constructor(@InjectModel(Resident.name) private residentModel: Model<Resident>) {}

    findResidentBySub(sub: string): Promise<Resident> {
        return this.residentModel.findOne({ sub });
    }
}
