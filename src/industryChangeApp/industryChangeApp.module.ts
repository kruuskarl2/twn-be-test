import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IndustryChangeAppController } from './industryChangeApp.controller';
import { IndustryChangeAppService } from './industryChangeApp.service';
import { IndustryChangeApp, IndustryChangeAppSchema } from './schemas/industryChangeApp.schema';
import { ResidentModule } from 'src/resident/resident.module';

@Module({
    controllers: [IndustryChangeAppController],
    providers: [IndustryChangeAppService],
    imports: [
        MongooseModule.forFeature([
            {
                name: IndustryChangeApp.name,
                schema: IndustryChangeAppSchema,
            },
        ]),
        ResidentModule,
    ],
})
export class IndustryChangeAppModule {}
