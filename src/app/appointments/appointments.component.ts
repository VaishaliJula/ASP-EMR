import { LoginService } from './../login.service';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from '../models/appointment.model';
import { AppointmentService } from '../appointment.service';
import { MatDialog } from '@angular/material';
import { AddAppointmentComponent } from '../add-appointment/add-appointment.component';
import { AddSoapNoteComponent } from '../add-soap-note/add-soap-note.component';
import { UpdateAppointmentComponent } from '../update-appointment/update-appointment.component';
import { User } from '../models/User';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  pageTitle: String = 'Appointment Scheduler';
  selectedDate: NgbDate;
  selectedTime;
  selectedDoctor;
  selectedPatient;

  doctors: any[];
  patients: any[];

  currentSelectedDate;

  appointments: Appointment[];

  user: User;
  /* Todo: HttpClient should be replaced with HttpService once the real api is available */
  constructor(
    private http: HttpClient,
    private service: AppointmentService,
    private dialog: MatDialog,
    private authService: LoginService
  ) {
    this.user = authService.getLoggedInUserDetails();
  }

  ngOnInit() {
    this.fetchAppointmentsForCurrentDate();
  }

  fetchAppointmentsForCurrentDate() {
    const userType = this.user.userType;
    if (userType === 'PATIENT') {
      this.service
        .getAppointmentsForMrNo(this.user.userPhone)
        .subscribe((res: Appointment[]) => (this.appointments = res));
    } else if  (userType === 'ADMIN') {
      if (this.currentSelectedDate) {
        this.findAppointments();
      } else {
        this.service
          .getAppointmentsForCurrentDate()
          .subscribe((res: Appointment[]) => (this.appointments = res));
      }
    } else {
      this.service
        .getAppointmentsForDoctor(this.user.userPhone, this.currentSelectedDate)
        .subscribe((res: Appointment[]) => this.appointments = res);
    }
  }

  findAppointments() {
    const userType = this.user.userType;
    if  (userType === 'ADMIN') {
      this.service
        .getAppointmentsForDate(this.currentSelectedDate)
        .subscribe((res: Appointment[]) => (this.appointments = res));
    } else if (userType === 'STAFF') {
      this.service
        .getAppointmentsForDoctor(this.user.userPhone, this.currentSelectedDate)
        .subscribe((res: Appointment[]) => this.appointments = res);
    }
  }

  openAddAppointment() {
    const dialogRef = this.dialog.open(AddAppointmentComponent);
    dialogRef.afterClosed().subscribe(_ => this.fetchAppointmentsForCurrentDate());
  }

  openSoapNoteDialog(mrNum: number) {
    this.dialog.open(AddSoapNoteComponent, {
      data: {
        mrNum: mrNum
      }
    });
  }

  openUpdateAppointment(app: Appointment) {
    const dialogRef = this.dialog.open(UpdateAppointmentComponent,  {
      data: {
        appointment: app
      }
    });
    dialogRef.afterClosed().subscribe(_ => this.fetchAppointmentsForCurrentDate());
  }

  onDateSelect(date: NgbDate) {
    console.log(date);
    this.selectedDate = date;
    this.getDoctorsList();
  }

  onTimeSelect(selection) {
    this.selectedTime = selection;
    this.getDoctorsList();
  }

  onDoctorSelect(selection) {
    this.selectedDoctor = selection;
    this.getPatientsList();
  }

  getDoctorsList() {
    if (this.selectedDate && this.selectedTime) {
      this.http.get<any[]>('assets/data/doctors.json').subscribe(data => {
        this.doctors = data;
      });
    }
  }

  getPatientsList() {
    this.http
      .get<any[]>('assets/data/patients.json')
      .subscribe(data => (this.patients = data));
  }
}
