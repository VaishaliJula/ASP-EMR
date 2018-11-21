import { Patient } from './Patient.model';

export interface Appointment {
  appId: number;
  date: string;
  time: string;
  comments: string;
  cheifComplaints: string;
  healthStatus: string;
  lastMedication: string;
  status: string;
  patient: Patient;
  email: string;
}
