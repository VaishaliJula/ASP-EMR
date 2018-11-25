import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { Appointment } from '../models/appointment.model';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {
  appointment: Appointment;

  AppStatus = ['PENDING', 'CHECKED_IN', 'CHECKED_OUT', 'CANCELLED'];
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private appointmentService: AppointmentService,
    private dialogRef: MatDialogRef<UpdateAppointmentComponent>,
    private snackbar: MatSnackBar
  ) {
    this.appointment = { ...data.appointment };
  }

  update() {
    this.appointmentService.createAppointment(this.appointment).subscribe(_ => {
      this.snackbar.open('Appointment Updated', '', {
        duration: 300
      });
      this.dialogRef.close();
    });
  }

  ngOnInit() {}
}
