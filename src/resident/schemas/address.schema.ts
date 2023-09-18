import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Address {
    @Prop({ required: true })
    country: string;

    @Prop({ required: true })
    city: string;

    @Prop()
    state: string;

    @Prop({ required: true })
    streetAddress: string;

    @Prop({ required: true })
    zipCode: string;

    @Prop({ required: true })
    isVerifiedAddress: Boolean;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
