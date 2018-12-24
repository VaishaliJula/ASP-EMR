import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Appointment } from './models/appointment.model';
import { DateUtilsService } from './date-utils.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private http: HttpService, private dateUtil: DateUtilsService) { }

  getAppointmentsForMrNo(mrno: any) {
    const url = `appointments/appointment/mrno/${mrno}`;
    return this.http.get(url);
  }

  getAppointmentsForCurrentDate() {
    const url = `appointments/currentDate`;
    return this.http.get(url);
  }

  getAppointmentsForDate(appDate) {
    const url = `appointments/appointment/date/${new Date(appDate).getTime()}`;
    return this.http.get(url);
  }

  getAppointmentsForDoctor(phone, date?) {
    date = this.dateUtil.formatForDomInput(date || new Date());
    const url = `appointments/checkAppointments/${date}/${phone}`;

    return this.http.get(url);
  }

  checkAppointmnetValidity(date, time, docEmail) {
    const url = `appointments/check?date=${date}&time=${time}&docEmail=${docEmail}`;
    return this.http.get(url);
  }

  createAppointment(appointment: Appointment, flag : boolean) {
    const url = `appointments/createAppointment/${flag}`;
    return this.http.post(url, appointment);
  }
}
