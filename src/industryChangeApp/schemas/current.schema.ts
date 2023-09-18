import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RegulatoryElection } from 'src/resident/interfaces/resident.interface';

@Schema()
export class Current {
    @Prop({ required: true })
    willWorkInPhysicalJurisdiction: Boolean;

    @Prop()
    residentSub: string;

    @Prop({ type: String })
    regulatoryElection: RegulatoryElection;
}

export const CurrentSchema = SchemaFactory.createForClass(Current);
