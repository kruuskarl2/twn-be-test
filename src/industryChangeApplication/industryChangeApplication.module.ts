import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { IndustryChangeApplicationController } from './industryChangeApplication.controller';
import { IndustryChangeApplicationService } from './industryChangeApplication.service';
import { IndustryChangeApplication, IndustryChangeApplicationSchema } from './schemas/industryChangeApplication.schema';

@Module({
    controllers: [IndustryChangeApplicationController],
    providers: [IndustryChangeApplicationService],
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.CONNECTION_STRING, { dbName: 'residentRegistry' }),
        MongooseModule.forFeature([{ name: IndustryChangeApplication.name, schema: IndustryChangeApplicationSchema }])
    ]
})
export class IndustryChangeApplicationModule { }
