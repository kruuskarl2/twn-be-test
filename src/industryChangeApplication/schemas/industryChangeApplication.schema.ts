import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CurrentSchema } from './current.schema';
import { RequiredSchema } from './required.schema';
import { DecisionSchema } from './decision.schema';
import { Current } from '../interfaces/current.interface';
import { Required } from '../interfaces/required.interface';
import { Decision } from '../interfaces/decision.interface';
import { Status, ObjectStatus } from '../interfaces/industryChangeApplication.interface';

export type industryChangeApplicationDocument = HydratedDocument<IndustryChangeApplication>;

@Schema({ timestamps: true, collection: 'industryChangeApplications' })
export class IndustryChangeApplication {
    @Prop({ required: true })
    residentSub: string;

    @Prop({ type: CurrentSchema, required: true })
    current: Current;

    @Prop({ type: RequiredSchema, required: true })
    required: Required;

    @Prop({ type: String, required: true })
    status: Status;

    @Prop()
    submittedAt: Date;

    @Prop({ type: DecisionSchema })
    decision: Decision;

    @Prop()
    createdBy: string;

    @Prop()
    updatedBy: string;

    @Prop({ type: String, required: true })
    objectStatus: ObjectStatus;
}

export const IndustryChangeApplicationSchema = SchemaFactory.createForClass(IndustryChangeApplication);
