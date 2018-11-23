import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Appointment } from '../models/appointment.model';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {
  appointment: Appointment;
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.appointment = data.appointment;
  }

  ngOnInit() {}
}
