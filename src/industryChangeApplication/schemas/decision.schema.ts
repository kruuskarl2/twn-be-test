import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Decision {
    @Prop()
    decidedAt: Date;

    @Prop()
    decidedBy: string;

    @Prop()
    rejectionReason: string;
}

export const DecisionSchema = SchemaFactory.createForClass(Decision);
