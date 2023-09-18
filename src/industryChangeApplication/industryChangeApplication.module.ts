import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IndustryChangeApplicationController } from './industryChangeApplication.controller';
import { IndustryChangeApplicationService } from './industryChangeApplication.service';
import { IndustryChangeApplication, IndustryChangeApplicationSchema } from './schemas/industryChangeApplication.schema';
import { ResidentModule } from 'src/resident/resident.module';

@Module({
    controllers: [IndustryChangeApplicationController],
    providers: [IndustryChangeApplicationService],
    imports: [
        MongooseModule.forFeature([
            {
                name: IndustryChangeApplication.name,
                schema: IndustryChangeApplicationSchema,
            },
        ]),
        ResidentModule,
    ],
})
export class IndustryChangeApplicationModule {}
