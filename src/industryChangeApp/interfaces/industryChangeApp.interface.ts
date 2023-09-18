import { Current } from './current.interface';
import { Required } from './required.interface';
import { Decision } from './decision.interface';

export enum Status {
    inReview = 'IN_REVIEW',
    approved = 'APPROVED',
    rejected = 'REJECTED',
}

export enum ObjectStatus {
    current = 'CURRENT',
    deleted = 'DELETED',
}

export interface IndustryChangeApp {
    residentSub: string;
    current: Current;
    required: Required;
    status: Status;
    submittedAt: Date;
    decision: Decision;
    createdBy: string;
    updatedBy: string;
    objectStatus: ObjectStatus;
}
