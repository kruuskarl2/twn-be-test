import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RegulatoryElection } from 'src/resident/interfaces/resident.interface';

@Schema()
export class Required {
    @Prop({ required: true })
    willWorkInPhysicalJurisdiction: Boolean;

    @Prop()
    industry: string;

    @Prop({ type: String })
    regulatoryElection: RegulatoryElection;

    @Prop()
    regulatoryElectionSub: string;
}

export const RequiredSchema = SchemaFactory.createForClass(Required);
