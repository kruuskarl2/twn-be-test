import { Module } from '@nestjs/common';
import { IndustryChangeApplicationModule } from './industryChangeApplication/industryChangeApplication.module';

@Module({
	imports: [IndustryChangeApplicationModule],
})

export class AppModule { }
