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
  //appointment: Appointment;
  set appointment(val: Appointment) {
    this._appointment = {
      ...val
      // date:( val.date as any instanceof Date) 
      // ? val.date 
      // : new Date(val.date.split('-').map(Number).map((n,i) => i===1 ? n-1 : n))
    }
  };
  get appointment (){
    return this._appointment
  }

  private _appointment;

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
    this.appointmentService.createAppointment(this.appointment, true).subscribe(_ => {
      this.snackbar.open('Appointment Updated', '', {
        duration: 300
      });
      this.dialogRef.close();
    });
  }

  ngOnInit() {}
}
