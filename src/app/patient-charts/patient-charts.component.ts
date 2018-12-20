import { LoginService } from 'src/app/login.service';
import { User } from './../models/User';
import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../patients.service';
import { Patient } from '../models/Patient.model';
import { SoapService } from '../soap.service';
import { Soap } from '../models/Soap.model';
import { MatSnackBar, MatDialogRef, MatDialog } from '@angular/material';
import { UpdatePatientPersonaldetailsComponent } from 'src/app/update-patient-personaldetails/update-patient-personaldetails.component';

@Component({
  selector: 'app-patient-charts',
  templateUrl: './patient-charts.component.html',
  styleUrls: ['./patient-charts.component.css']
})
export class PatientChartsComponent implements OnInit {
  mrNum;
  firstName;
  lastName;
  patients: Patient[];
  soaps: Soap[];
  patientUser: Patient = {} as Patient;
  user: User
  constructor(
    private patientService: PatientsService,
    private soapService: SoapService,
    private authService: LoginService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ) {
    this.user = authService.getLoggedInUserDetails();
  }

  ngOnInit() {
    if (this.user.userType === 'PATIENT') {
      this.fetchPatientDetails();
      this.soapService
        .getPatientSoapforPhone(this.user.userPhone)
        .subscribe(soaps => (this.soaps = soaps));
    }
  }

  fetchPatientDetails() {
    this.patientService.getPatientDetailsByPhone(this.user.userPhone).subscribe(singlePatient => {
      this.patientUser = singlePatient.body;
      this.patientUser.addr =
        this.patientUser.addressline1 +
        '\n' +
        this.patientUser.addressline2 +
        '\n' +
        this.patientUser.city +
        '\n' +
        this.patientUser.state +
        '\n' +
        this.patientUser.zipCode;
    });
  }

  findPatient() {
    this.soaps = [];
    if (this.mrNum) {
      this.patientService.getPatientDetails(this.mrNum).subscribe(patientObj => {
        this.patients = patientObj;
        if (!this.patients) {
          this.snackbar.open('Patient not found!', '', {
            duration: 3000
          });
        } else {
          for (let i = 0; i < this.patients.length; i++) {
            this.patients[i].addr =
              this.patients[i].addressline1 +
              '\n' +
              this.patients[i].addressline2 +
              '\n' +
              this.patients[i].city +
              '\n' +
              this.patients[i].state +
              '\n' +
              this.patients[i].zipCode;
          }
        }
      });
    } else if (this.firstName || this.lastName) {
      if (this.firstName && !this.lastName) {
        this.lastName = '';
      } else if (!this.firstName && this.lastName) {
        this.firstName = '';
      }
      this.patientService.getPatientDetailsByName(this.firstName, this.lastName).subscribe(patientObj => {
        this.patients = patientObj.body;
        if (this.patients[0].firstName === 'ERROR') {
          this.snackbar.open('Patient not found!', '', {
            duration: 3000
          });
          this.patients = [];
          return;
        }
        for (let i = 0; i < this.patients.length; i++) {
          this.patients[i].addr =
            this.patients[i].addressline1 +
            '\n' +
            this.patients[i].addressline2 +
            '\n' +
            this.patients[i].city +
            '\n' +
            this.patients[i].state +
            '\n' +
            this.patients[i].zipCode;
          }
      });
    }
  }

  openUpdatePatient(patient: Patient){
    const dialogRef = this.dialog.open(UpdatePatientPersonaldetailsComponent,  {
      data: {
        patientUser: patient
      }
    });
    dialogRef.afterClosed().subscribe(_ => this.fetchPatientDetails());
  }


  fetchSoapNotes(patient) {
    this.soaps = [];
    this.soapService
      .getPatientSoap(patient.mrnum)
      .subscribe(soaps => (this.soaps = soaps));
  }
}
