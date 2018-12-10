import { User } from './../models/User';
import { LoginService } from 'src/app/login.service';
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
  medication;
  user: User


  findPatient() {
    this.patientService
      .getPatientDetails(this.mrNum)
      .subscribe((response) => {
        this.patientName = response[0].firstName + ' ' + response[0].lastName;
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
    private authService: LoginService,
    private dialogRef: MatDialogRef<AddAppointmentComponent>
  ) {
    this.user = authService.getLoggedInUserDetails();
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
        duration: 3000
      });
    }
    if (this.user.userType != 'PATIENT') {
      if (!this.patientName || this.patientName.trim().length === 0) {
        this.snackbar.open(
          'Invalid Patient Name. Please click on search if you have entered the Medical Record Number',
          '',
          {
            duration: 3000
          }
        );
      }
    }

    if (this.user.userType === 'PATIENT') {
      this.patientService
        .getPatientDetailsByPhone(this.user.userPhone)
        .subscribe((response) => {
          this.mrNum = response.body.mrnum;
        });
    }

    const appointment: Appointment = {
      date: new Date(this.currentSelectedDate).toISOString(),
      time: (this.selectedSlot + ':00').replace(/\s/g, ''),
      comments: this.comments,
      chiefComplaints: this.chiefComplaint,
      healthStatus: this.healthCondition,
      lastMedication: this.medication,
      status: 'PENDING',
      patient: {
        mrnum: this.mrNum
      },
      hospitalStaff: {
        email: this.selectedDoctorId
      }
    };
    this.checkAppointmnetValidity();
    if (this.isFormValid) {
      this.appointmentService
        .createAppointment(appointment, true)
        .subscribe((res: Appointment) => {
          if (!res) {
            this.snackbar.open('Appointment already Exists!', '', {
              duration: 3000
            });
          } else {
            this.snackbar.open('Appointment Created', '', {
              duration: 3000
            });
          }
          this.dialogRef.close();
        });
    }
  }

  ngOnInit() {

  }
}
