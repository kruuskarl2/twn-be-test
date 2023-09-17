import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Current {
    @Prop({ required: true })
    willWorkInPhysicalJurisdiction: Boolean;

    @Prop()
    residentSub: string;

    @Prop()
    regulatoryElection: string;
}

export const CurrentSchema = SchemaFactory.createForClass(Current);
