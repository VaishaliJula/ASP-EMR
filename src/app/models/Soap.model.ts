import { Patient } from './Patient.model';

export interface Soap {
  soapId: number;
  subjectiveNote: string;
  objectiveNote: string;
  assessmentNote: string;
  planNote: string;
  patient: Patient;
}
