import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CurrentSchema } from './current.schema';
import { RequiredSchema } from './required.schema';
import { DecisionSchema } from './decision.schema';
import { CurrentInterface } from '../interfaces/current.interface';
import { RequiredInterface } from '../interfaces/required.interface';
import { DecisionInterface } from '../interfaces/decision.interface';

export type industryChangeApplicationDocument = HydratedDocument<IndustryChangeApplication>;

enum Status {
    inReview = 'IN_REVIEW',
    approved = 'APPROVED',
    rejected = 'REJECTED'
}

enum ObjectStatus {
    current = 'CURRENT',
    deleted = 'DELETED'
}

@Schema({ timestamps: true, collection: "industryChangeApplications" })
export class IndustryChangeApplication {
    @Prop({ required: true })
    id: string;

    @Prop({ required: true })
    residentSub: string;

    @Prop({ type: CurrentSchema, required: true })
    current: CurrentInterface;

    @Prop({ type: RequiredSchema, required: true })
    required: RequiredInterface;

    @Prop({ type: String, required: true })
    status: Status;

    @Prop()
    submittedAt: Date;

    @Prop({ type: DecisionSchema })
    decision: DecisionInterface;

    @Prop()
    createdBy: string

    @Prop()
    updatedBy: string

    @Prop({ type: String, required: true })
    objectStatus: ObjectStatus
}

export const IndustryChangeApplicationSchema = SchemaFactory.createForClass(IndustryChangeApplication);
