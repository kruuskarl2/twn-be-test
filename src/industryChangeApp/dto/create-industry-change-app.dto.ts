import { IsString, IsBoolean, IsEnum, IsOptional } from 'class-validator';
import { ShouldBeDefinedAccordingToBoolean } from 'src/validation/shouldBeDefinedAccordingToBoolean';
import { Industry, RegulatoryElection } from 'src/resident/interfaces/resident.interface';

export class CreateIndustryChangeAppDto {
    @IsString()
    residentSub: string;

    @IsBoolean()
    @ShouldBeDefinedAccordingToBoolean('industry')
    @ShouldBeDefinedAccordingToBoolean('regulatoryElection')
    @ShouldBeDefinedAccordingToBoolean('regulatoryElectionSub')
    willWorkInPhysicalJurisdiction: Boolean;

    @IsOptional()
    @IsEnum(Industry)
    industry: Industry;

    @IsOptional()
    @IsEnum(RegulatoryElection)
    regulatoryElection: RegulatoryElection;

    @IsOptional()
    @IsString()
    regulatoryElectionSub: string;
}
