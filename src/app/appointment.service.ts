import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Appointment } from './models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private http: HttpService) {}

  getAppointmentsForDate(appDate) {
    const url = `appointments/appointment/date/${new Date(appDate).getTime()}`;
    return this.http.get(url);
  }

  checkAppointmnetValidity(date, time, docEmail) {
    const url = `appointments/check?date=${date}&time=${time}&docEmail=${docEmail}`;
    return this.http.get(url);
  }

  createAppointment(appointment: Appointment) {
    const url = 'appointments/createAppointment';
    return this.http.post(url, appointment);
  }
}
