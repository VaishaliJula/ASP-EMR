import { Patient } from './Patient.model';
import { Doctor } from './Doctor.model';

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
  hospitalStaff: Doctor;
  email: string;
}
