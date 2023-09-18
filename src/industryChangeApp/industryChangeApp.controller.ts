import { Controller, Post, Body } from '@nestjs/common';
import { CreateIndustryChangeAppDto } from './dto/create-industry-change-app.dto';
import { IndustryChangeAppService } from './industryChangeApp.service';

@Controller('resident-register')
export class IndustryChangeAppController {
    constructor(private industryChangeAppService: IndustryChangeAppService) {}

    @Post('/industry-change-applications')
    async create(
        @Body()
        createIndustryChangeAppDto: CreateIndustryChangeAppDto,
    ) {
        await this.industryChangeAppService.create(createIndustryChangeAppDto);
    }
}
