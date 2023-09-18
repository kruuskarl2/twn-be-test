import { IsString, IsBoolean, IsEnum } from 'class-validator';
import { Industry, RegulatoryElection } from 'src/resident/interfaces/resident.interface';

export class UpdateResidentIndustryDto {
    @IsBoolean()
    willWorkInPhysicalJurisdiction: Boolean;

    @IsEnum(Industry)
    industry: Industry;

    @IsEnum(RegulatoryElection)
    regulatoryElection: RegulatoryElection;

    @IsString()
    regulatoryElectionSub: string;
}
