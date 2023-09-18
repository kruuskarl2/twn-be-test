import { Industry, RegulatoryElection } from 'src/resident/interfaces/resident.interface';

export class Required {
    willWorkInPhysicalJurisdiction: Boolean;
    industry: Industry;
    regulatoryElection: RegulatoryElection;
    regulatoryElectionSub: string;
}
