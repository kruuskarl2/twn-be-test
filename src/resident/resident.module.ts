import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResidentService } from './resident.service';
import { Resident, ResidentSchema } from './schemas/resident.schema';
import { ResidentController } from './resident.controller';

@Module({
    controllers: [ResidentController],
    providers: [ResidentService],
    imports: [MongooseModule.forFeature([{ name: Resident.name, schema: ResidentSchema }])],
    exports: [ResidentService],
})
export class ResidentModule {}
