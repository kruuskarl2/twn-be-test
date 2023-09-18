import { RegulatoryElection, Industry } from 'src/resident/interfaces/resident.interface';

export class Current {
    willWorkInPhysicalJurisdiction: Boolean;
    industry: Industry;
    regulatoryElection: RegulatoryElection;
    regulatoryElectionSub: string;
}
