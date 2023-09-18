import { IsString, IsEnum, IsArray } from 'class-validator';
import { Transform } from 'class-transformer';
import { Status } from '../interfaces/industryChangeApp.interface';

export class FindIndustryChangeAppsDto {
    @Transform(({ value }) => value.split(','))
    @IsEnum(Status, { each: true })
    @IsArray()
    statuses: Status[];

    @IsString()
    residentSub: string;
}
