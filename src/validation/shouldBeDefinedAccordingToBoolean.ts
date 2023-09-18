import {
    registerDecorator,
    ValidationOptions,
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';

export const ShouldBeDefinedAccordingToBoolean = (property: string, validationOptions?: ValidationOptions) => {
    return (object: Object, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [property],
            validator: shouldBeDefinedAccordingToBooleanConstraint,
        });
    };
};

@ValidatorConstraint({ name: 'ShouldBeDefinedAccordingToBoolean' })
export class shouldBeDefinedAccordingToBooleanConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments) {
        const [relatedPropertyName] = args.constraints;
        const relatedValue = (args.object as any)[relatedPropertyName];
        return (value === true && relatedValue) || (value === false && !relatedValue);
    }

    defaultMessage(args?: ValidationArguments): string {
        const [relatedPropertyName] = args.constraints;
        return `'${relatedPropertyName}' needs to be defined/undefined if '$property' is true/false respectively.`;
    }
}
