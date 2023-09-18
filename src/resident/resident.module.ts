import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResidentService } from './resident.service';
import { Resident, ResidentSchema } from './schemas/resident.schema';

@Module({
    providers: [ResidentService],
    imports: [MongooseModule.forFeature([{ name: Resident.name, schema: ResidentSchema }])],
    exports: [ResidentService],
})
export class ResidentModule {}
