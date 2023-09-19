import { Controller, Get } from '@nestjs/common';
import { ResidentService } from './resident.service';
import { Resident } from './interfaces/resident.interface';

@Controller('resident-register')
export class ResidentController {
    constructor(private residentService: ResidentService) {}

    @Get()
    async findAll(): Promise<Resident[]> {
        return await this.residentService.findAll();
    }
}
