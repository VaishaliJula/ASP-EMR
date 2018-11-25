import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../patients.service';
import { Patient } from '../models/Patient.model';
import { Doctor } from '../models/Doctor.model';
import { HospitalStaffService } from '../hospital-staff.service';
import { AppointmentService } from '../appointment.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { Appointment } from '../models/appointment.model';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  slots: string[];
  mrNum: number;
  patientName: string;
  doctors: Doctor[];
  selectedSlot;
  selectedDoctorId;
  currentSelectedDate;
  isFormValid: boolean;
  chiefComplaint;
  comments;
  healthCondition;

  findPatient() {
    this.patientService
      .getPatientDetails(this.mrNum)
      .subscribe((res: Patient) => {
        this.patientName = res.firstName + ' ' + res.lastName;
      });
  }

  checkAppointmnetValidity() {
    const date = new Date(this.currentSelectedDate).getTime();
    const time = (this.selectedSlot + ':00').replace(/\s/g, '');
    return this.appointmentService
      .checkAppointmnetValidity(date, time, this.selectedDoctorId)
      .subscribe((res: boolean) => {
        this.isFormValid = res;
        if (!res) {
          this.snackbar.open('Appointment Slot not available', '', {
            duration: 3000
          });
        }
      });
  }

  constructor(
    private patientService: PatientsService,
    private staffService: HospitalStaffService,
    private appointmentService: AppointmentService,
    private snackbar: MatSnackBar,
    private dialogRef: MatDialogRef<AddAppointmentComponent>
  ) {
    this.staffService.getAllDoctors().subscribe((res: Doctor[]) => {
      this.doctors = res;
    });
    this.slots = [];
    const d = new Date();
    d.setHours(9);
    d.setMinutes(0);
    while (d.getHours() <= 18) {
      this.slots.push(
        d.getHours() + ' : ' + (d.getMinutes() ? d.getMinutes() : '00')
      );
      d.setMinutes(d.getMinutes() + 30);
    }
  }

  createAppointment() {
    if (!this.isFormValid) {
      this.snackbar.open('Slot not valid!', '', {
        duration: 150
      });
    }
    if (!this.patientName || this.patientName.trim().length === 0) {
      this.snackbar.open(
        'Invalid Patiend Name. Please click on search if you have entered the Medical Record Number',
        '',
        {
          duration: 300
        }
      );
    }
    const appointment: Appointment = {
      date: new Date(this.currentSelectedDate).toISOString(),
      time: (this.selectedSlot + ':00').replace(/\s/g, ''),
      comments: this.comments,
      chiefComplaints: this.chiefComplaint,
      healthStatus: this.healthCondition,
      lastMedication: '',
      status: 'PENDING',
      patient: {
        mrnum: 1
      },
      hospitalStaff: {
        email: 'vaishali.jula@gmail.com'
      }
    };
    this.appointmentService
      .createAppointment(appointment)
      .subscribe((res: Appointment) => {
        this.snackbar.open('Appointment Created', '', {
          duration: 300
        });
        this.dialogRef.close();
      });
  }

  ngOnInit() {}
}
