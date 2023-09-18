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

export enum Industry {
    agricultural = 'AGRICULTURAL',
    construction = 'CONSTRUCTION',
    energy = 'ENERGY',
    financeAndInsurance = 'FINANCE_AND_INSURANCE',
    food = 'FOOD',
    health = 'HEALTH',
    manufacturing = 'MANUFACTURING',
    miningAndSubsurface = 'MINING_AND_SUBSURFACE',
    privateSecurity = 'PRIVATE_SECURITY',
    wasteManagement = 'WASTE_MANAGEMENT',
    null = undefined,
}

export enum RegulatoryElection {
    australia = 'AUSTRALIA',
    austria = 'AUSTRIA',
    belgium = 'BELGIUM',
    canada = 'CANADA',
    chile = 'CHILE',
    roatanCommonLawCode = 'ROATAN_COMMON_LAW_CODE',
    denmark = 'DENMARK',
    dubai = 'DUBAI',
    estonia = 'ESTONIA',
    finland = 'FINLAND',
    france = 'FRANCE',
    germany = 'GERMANY',
    honduras = 'HONDURAS',
    hongKong = 'HONG_KONG',
    iceland = 'ICELAND',
    ireland = 'IRELAND',
    israel = 'ISRAEL',
    italy = 'ITALY',
    japan = 'JAPAN',
    luxembourg = 'LUXEMBOURG',
    mexico = 'MEXICO',
    netherlands = 'NETHERLANDS',
    newZealand = 'NEW_ZEALAND',
    norway = 'NORWAY',
    petitionForTailoredRegulationGranted = 'PETITION_FOR_TAILORED_REGULATION_GRANTED',
    petitionForTailoredRegulationPending = 'PETITION_FOR_TAILORED_REGULATION_PENDING',
    poland = 'POLAND',
    singapore = 'SINGAPORE',
    southKorea = 'SOUTH_KOREA',
    spain = 'SPAIN',
    sweden = 'SWEDEN',
    switzerland = 'SWITZERLAND',
    uk = 'UK',
    usa = 'USA',
    null = undefined,
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
    industry: Industry;
    willWorkInPhysicalJurisdiction: Boolean;
    regulatoryElection: RegulatoryElection;
    regulatoryElectionSub: string;
    firstRegistrationDate: Date;
    nextSubscriptionPaymentDate: Date;
    profilePicture: string;
    status: Status;
    residencyEndDate: Date;
}
