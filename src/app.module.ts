import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { IndustryChangeAppModule } from './industryChangeApp/industryChangeApp.module';

@Module({
    imports: [
        IndustryChangeAppModule,
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.CONNECTION_STRING, {
            dbName: 'residentRegistry',
        }),
    ],
})
export class AppModule {}
