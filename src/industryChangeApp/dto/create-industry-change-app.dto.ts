import { IsString, IsBoolean, IsEnum } from 'class-validator';
import { ShouldBeNullIfFalse } from 'src/validation/shouldBeNullIfFalse';
import { shouldBeDefinedIfTrue } from 'src/validation/shouldBeDefinedIfTrue';
import { Industry, RegulatoryElection } from 'src/resident/interfaces/resident.interface';

export class CreateIndustryChangeAppDto {
    @IsString()
    residentSub: string;

    @IsBoolean()
    willWorkInPhysicalJurisdiction: Boolean;

    @IsEnum(Industry)
    @ShouldBeNullIfFalse('willWorkInPhysicalJurisdiction')
    @shouldBeDefinedIfTrue('willWorkInPhysicalJurisdiction')
    industry: Industry;

    @IsEnum(RegulatoryElection)
    @ShouldBeNullIfFalse('willWorkInPhysicalJurisdiction')
    @shouldBeDefinedIfTrue('willWorkInPhysicalJurisdiction')
    regulatoryElection: RegulatoryElection;

    @ShouldBeNullIfFalse('willWorkInPhysicalJurisdiction')
    @shouldBeDefinedIfTrue('willWorkInPhysicalJurisdiction')
    regulatoryElectionSub: string;
}
