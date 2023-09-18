import {
    registerDecorator,
    ValidationOptions,
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from 'class-validator';

export const ShouldBeNullIfFalse = (property: string, validationOptions?: ValidationOptions) => {
    return (object: Object, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            constraints: [property],
            validator: ShouldBeNullIfFalseConstraint,
        });
    };
};

@ValidatorConstraint({ name: 'ShouldBeNullIfFalse' })
export class ShouldBeNullIfFalseConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments) {
        const [relatedPropertyName] = args.constraints;
        const relatedValue = (args.object as any)[relatedPropertyName];
        return relatedValue === true || (relatedValue === false && !value);
    }

    defaultMessage(args?: ValidationArguments): string {
        const [relatedPropertyName] = args.constraints;
        return `'$property' cannot be defined if '${relatedPropertyName}' is false.`;
    }
}
