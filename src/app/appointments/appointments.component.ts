import { HttpClient } from '@angular/common/http';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Appointment } from '../models/appointment.model';

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

  appointments: Appointment[];

  /* Todo: HttpClient should be replaced with HttpService once the real api is available */
  constructor(private http: HttpClient) {}

  ngOnInit() {}

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
