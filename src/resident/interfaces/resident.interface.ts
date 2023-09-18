export enum TypeOfRegistration {
    eResidency = 'E_RESIDENCY',
    residency = 'RESIDENCY',
    limitedEResidency = 'LIMITED_E_RESIDENCY',
}

export enum TypeOfRegistrationSub {
    honduran = 'HONDURAN',
    international = 'INTERNATIONAL',
}

export enum Status {
    active = 'ACTIVE',
    inactive = 'INACTIVE',
}

export class Resident {
    sub: string;
    firstName: string;
    lastName: string;
    fullName: string;
    permitNumber: Number;
    permitNumberQrCode: string;
    dateOfBirth: Date;
    countryOfBirth: string;
    email: string;
    citizenship: string;
    gender: string;
    address: Object;
    phoneNumber: string;
    typeOfRegistration: TypeOfRegistration;
    typeOfRegistrationSub: TypeOfRegistrationSub;
    industry: string;
    willWorkInPhysicalJurisdiction: Boolean;
    regulatoryElection: string;
    regulatoryElectionSub: string;
    firstRegistrationDate: Date;
    nextSubscriptionPaymentDate: Date;
    profilePicture: string;
    status: Status;
    residencyEndDate: Date;
}
