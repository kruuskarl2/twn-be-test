import { IsString, IsBoolean } from 'class-validator';
import { ShouldBeNullIfFalse } from 'src/validation/shouldBeNullIfFalse';
import { shouldBeDefinedIfTrue } from 'src/validation/shouldBeDefinedIfTrue';

export class CreateIndustryChangeAppDto {
    @IsString()
    residentSub: string;

    @IsBoolean()
    willWorkInPhysicalJurisdiction: Boolean;

    @ShouldBeNullIfFalse('willWorkInPhysicalJurisdiction')
    @shouldBeDefinedIfTrue('willWorkInPhysicalJurisdiction')
    industry: string;

    @ShouldBeNullIfFalse('willWorkInPhysicalJurisdiction')
    @shouldBeDefinedIfTrue('willWorkInPhysicalJurisdiction')
    regulatoryElection: string;

    @ShouldBeNullIfFalse('willWorkInPhysicalJurisdiction')
    @shouldBeDefinedIfTrue('willWorkInPhysicalJurisdiction')
    regulatoryElectionSub: string;
}
