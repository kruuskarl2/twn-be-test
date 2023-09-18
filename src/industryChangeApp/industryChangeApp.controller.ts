import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { CreateIndustryChangeAppDto } from './dto/create-industry-change-app.dto';
import { IndustryChangeAppService } from './industryChangeApp.service';

@Controller('resident-register')
export class IndustryChangeAppController {
    constructor(private industryChangeAppService: IndustryChangeAppService) {}

    @Post('/industry-change-applications')
    async create(
        @Res() response,
        @Body()
        createIndustryChangeAppDto: CreateIndustryChangeAppDto,
    ) {
        const newApplication = await this.industryChangeAppService.create(createIndustryChangeAppDto);

        return response.status(HttpStatus.CREATED).json({
            message: 'Industry change application has been created successfully.',
            newApplication,
        });
    }
}
