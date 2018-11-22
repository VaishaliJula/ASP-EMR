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
}
