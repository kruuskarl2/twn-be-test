import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Industry, RegulatoryElection } from 'src/resident/interfaces/resident.interface';

@Schema()
export class Required {
    @Prop({ required: true })
    willWorkInPhysicalJurisdiction: Boolean;

    @Prop({ type: String })
    industry: Industry;

    @Prop({ type: String })
    regulatoryElection: RegulatoryElection;

    @Prop()
    regulatoryElectionSub: string;
}

export const RequiredSchema = SchemaFactory.createForClass(Required);
