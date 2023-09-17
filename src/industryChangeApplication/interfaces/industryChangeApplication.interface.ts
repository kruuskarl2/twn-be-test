import { CurrentInterface } from './current.interface';
import { RequiredInterface } from './required.interface';
import { DecisionInterface } from './decision.interface';

enum Status {
    inReview = 'IN_REVIEW',
    approved = 'APPROVED',
    rejected = 'REJECTED'
}

enum ObjectStatus {
    current = 'CURRENT',
    deleted = 'DELETED'
}

export interface IndustryChangeApplication {
    id: string;
    residentSub: string;
    current: CurrentInterface;
    required: RequiredInterface;
    status: Status;
    submittedAt: Date;
    decision: DecisionInterface;
    createdBy: string
    updatedBy: string
    objectStatus: ObjectStatus
}
