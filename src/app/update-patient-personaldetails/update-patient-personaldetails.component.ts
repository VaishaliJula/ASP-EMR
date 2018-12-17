import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { Appointment } from '../models/appointment.model';
import { Patient } from 'src/app/models/Patient.model';
import { PatientsService } from 'src/app/patients.service';
import { LoginService } from 'src/app/login.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-update-patient-personaldetails',
  templateUrl: './update-patient-personaldetails.component.html',
  styleUrls: ['./update-patient-personaldetails.component.css']
})
export class UpdatePatientPersonaldetailsComponent implements OnInit {
  set patientUser(val: Patient) {
    this._patientUser = val;
  }

  get patientUser () {
    return this._patientUser as Patient;
  }

  private _patientUser = {};
  user: User;
  constructor(
  @Inject(MAT_DIALOG_DATA) data: any,
  private patientsService: PatientsService,
  private dialogRef: MatDialogRef<UpdatePatientPersonaldetailsComponent>,
  private snackbar: MatSnackBar,
  private authService: LoginService
  ) {
    this.user = authService.getLoggedInUserDetails();
    this.patientUser = {... data.patientUser};

}

  ngOnInit() {
  }

  updatePatient() {
    this.patientsService.updatePatient(this.patientUser).subscribe(_ => {
      this.snackbar.open('Patient Details Updated', '', {
        duration: 300
      });
      this.dialogRef.close();
    });
  }

}
