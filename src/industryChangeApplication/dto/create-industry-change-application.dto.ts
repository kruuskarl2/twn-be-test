import { IsString, IsBoolean } from 'class-validator';

export class CreateIndustryChangeApplicationDto {
    @IsString()
    residentSub: string;

    @IsBoolean()
    willWorkInPhysicalJurisdiction: Boolean;

    @IsString()
    industry: string;

    @IsString()
    regulatoryElection: string;

    @IsString()
    regulatoryElectionSub: string;
}
