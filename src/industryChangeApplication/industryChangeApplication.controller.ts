import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { CreateIndustryChangeApplicationDto } from './dto/create-industry-change-application.dto';
import { IndustryChangeApplicationService } from './industryChangeApplication.service';

@Controller('resident-register')
export class IndustryChangeApplicationController {
    constructor(private industryChangeApplicationService: IndustryChangeApplicationService) {}

    @Post('/industry-change-applications')
    async create(
        @Body()
        createIndustryChangeApplicationDto: CreateIndustryChangeApplicationDto,
    ) {
        await this.industryChangeApplicationService.create(createIndustryChangeApplicationDto);
    }
}
