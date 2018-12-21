import { DateUtilsService } from './../date-utils.service';
import { AppointmentsComponent } from './../appointments/appointments.component';
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
import { map } from 'rxjs/operators';

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
  firstName: string
  lastName: string
  patientSearchText: Patient = {} as Patient;
  filteredPatients;

  patientSearchTimeout;
  patientSearchSubscription;

  today = new Date();
  minAllowedDate = this.dateUtils.addDays(this.today, -1);
  maxAllowedDate = this.dateUtils.addMonths(this.today, 1);

  findPatient() {
    this.patientService
      .getPatientDetails(this.mrNum)
      .subscribe((response) => {
        if (response[0].firstName === 'ERROR') {
          this.snackbar.open('Patient Not Found!', '', {
            duration: 3000
          })
          return;
        }
        this.patientName = response[0].firstName + ' ' + response[0].lastName;
        this.mrNum = response[0].mrnum;
      });
  }

  // findPatient() {
  //     this.patientService.getPatientDetailsByName(this.firstName, this.lastName).subscribe(patientObj => {
  //        this.patientName = patientObj.body;
  //       if (this.patients[0].firstName === 'ERROR') {
  //         this.snackbar.open('Patient not found!', '', {
  //           duration: 3000
  //         });
  //       }

  //     });
  //   }

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
    private dialogRef: MatDialogRef<AddAppointmentComponent>,
    private dateUtils: DateUtilsService
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

  formatPatientObj(patient: Patient) {
    return patient && patient.firstName;
  }

  updatePatientList(event) {
    const firstName = event.target.value;
    if (this.patientSearchTimeout) {
      clearTimeout(this.patientSearchTimeout);
    }
    this.patientSearchTimeout = setTimeout(() => {
      if (this.patientSearchSubscription) {
        this.patientSearchSubscription.unsubscribe();
      }
      this.patientSearchSubscription = this.patientService.getPatientDetailsByName(firstName, '')
        .pipe(map((response: any) => response.body))
        .subscribe(data => this.filteredPatients = data);
    }, 300);
  }

  createAppointment() {
    if (!this.isFormValid) {
      return this.snackbar.open('Slot not valid!', '', {
        duration: 3000
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
        mrnum: this.patientSearchText.mrnum
      },
      hospitalStaff: {
        email: this.selectedDoctorId
      }
    };
    this.checkAppointmnetValidity();
    if (this.isFormValid) {
      this.appointmentService
        .createAppointment(appointment, false)
        .subscribe((res: any) => {
          if (res.appID == 0) {
            this.snackbar.open('Appointment already Exists on the same day!', '', {
              duration: 3000
            });
            return;
          } else {
            this.snackbar.open('Appointment Created', '', {
              duration: 3000
            });
            this.dialogRef.close();
          }
        });
    }
  }

  ngOnInit() {
    if (this.user.userType === 'PATIENT') {
      this.patientService
        .getPatientDetailsByPhone(this.user.userPhone)
        .subscribe((response) => {
          this.mrNum = response.body.mrnum;
        });
    }
  }
}
