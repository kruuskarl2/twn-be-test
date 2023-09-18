import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { IndustryChangeApplicationModule } from './industryChangeApplication/industryChangeApplication.module';
import { ResidentModule } from './resident/resident.module';

@Module({
    imports: [
        IndustryChangeApplicationModule,
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.CONNECTION_STRING, {
            dbName: 'residentRegistry',
        }),
    ],
})
export class AppModule {}
