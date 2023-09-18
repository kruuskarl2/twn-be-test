import {
    registerDecorator,
    ValidationOptions,
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';

export const shouldBeDefinedIfTrue = (property: string, validationOptions?: ValidationOptions) => {
    return (object: Object, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [property],
            validator: shouldBeDefinedIfTrueConstraint,
        });
    };
};

@ValidatorConstraint({ name: 'ShouldBeNullIfFalse' })
export class shouldBeDefinedIfTrueConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments) {
        const [relatedPropertyName] = args.constraints;
        const relatedValue = (args.object as any)[relatedPropertyName];
        return relatedValue === false || (relatedValue === true && value);
    }

    defaultMessage(args?: ValidationArguments): string {
        const [relatedPropertyName] = args.constraints;
        return `'$property' needs to be defined if '${relatedPropertyName}' is true.`;
    }
}
