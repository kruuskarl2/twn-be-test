import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AddressSchema } from './address.schema';
import { TypeOfRegistration, TypeOfRegistrationSub, Status } from '../interfaces/resident.interface';
import { Address } from '../interfaces/address.interface';

export type residentDocument = HydratedDocument<Resident>;

@Schema()
export class Resident {
    @Prop({ required: true })
    sub: string;

    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    fullName: string;

    @Prop({ required: true })
    permitNumber: Number;

    @Prop({ required: true })
    permitNumberQrCode: string;

    @Prop({ required: true })
    dateOfBirth: Date;

    @Prop({ required: true })
    countryOfBirth: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    citizenship: string;

    @Prop({ required: true })
    gender: string;

    @Prop({ type: AddressSchema, required: true })
    address: Address;

    @Prop({ required: true })
    phoneNumber: string;

    @Prop({ required: true })
    typeOfRegistration: TypeOfRegistration;

    @Prop()
    typeOfRegistrationSub: TypeOfRegistrationSub;

    @Prop()
    industry: string;

    @Prop({ required: true })
    willWorkInPhysicalJurisdiction: Boolean;

    @Prop()
    regulatoryElection: string;

    @Prop()
    regulatoryElectionSub: string;

    @Prop({ required: true })
    firstRegistrationDate: Date;

    @Prop({ required: true })
    nextSubscriptionPaymentDate: Date;

    @Prop({ required: true })
    profilePicture: string;

    @Prop({ required: true })
    status: Status;

    @Prop()
    residencyEndDate: Date;
}

export const ResidentSchema = SchemaFactory.createForClass(Resident);
