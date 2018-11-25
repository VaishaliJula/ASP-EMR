import { Patient } from './Patient.model';
import { Doctor } from './Doctor.model';

export interface Soap {
  soapId?: number;
  subjectiveNote: string;
  objectiveNote: string;
  assessmentNote: string;
  planNote: string;
  patient: Patient;
  hospitalStaff: Doctor;
  soapDate?: string;
}
