import { Patient } from './Patient.model';
import { Doctor } from './Doctor.model';

export interface Appointment {
  appID?: number;
  date: string;
  time: string;
  comments: string;
  chiefComplaints: string;
  healthStatus: string;
  lastMedication: string;
  status: string;
  patient: Patient;
  hospitalStaff: Doctor;
}
