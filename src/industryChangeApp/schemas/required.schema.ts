import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Required {
    @Prop({ required: true })
    willWorkInPhysicalJurisdiction: Boolean;

    @Prop()
    industry: string;

    @Prop()
    regulatoryElection: string;

    @Prop()
    regulatoryElectionSub: string;
}

export const RequiredSchema = SchemaFactory.createForClass(Required);
