import { Controller, Post, Body, Res, HttpStatus, Get, Param, Query, Delete } from '@nestjs/common';
import { CreateIndustryChangeAppDto } from './dto/create-industry-change-app.dto';
import { FindIndustryChangeAppsDto } from './dto/find-industry-change-apps.dto';
import { IndustryChangeAppService } from './industryChangeApp.service';
import { IndustryChangeApp } from './interfaces/industryChangeApp.interface';

@Controller('resident-register/industry-change-applications')
export class IndustryChangeAppController {
    constructor(private industryChangeAppService: IndustryChangeAppService) {}

    @Post()
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

    @Get('/:id')
    async findById(@Param() params: any): Promise<IndustryChangeApp> {
        return await this.industryChangeAppService.findById(params.id);
    }

    @Get()
    async find(@Query() findIndustryChangeAppsDto: FindIndustryChangeAppsDto): Promise<IndustryChangeApp[]> {
        return await this.industryChangeAppService.find(findIndustryChangeAppsDto);
    }

    @Delete('/:id')
    async deleteById(@Res() response, @Param() params: any) {
        const deletedApplication = await this.industryChangeAppService.deleteById(params.id);

        return response.status(HttpStatus.OK).json({
            message: 'Industry change application has been deleted successfully.',
            deletedApplication,
        });
    }
}
