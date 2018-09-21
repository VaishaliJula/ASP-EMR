import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/patients.service';
import { PatientModel } from 'src/app/patients/models/patient.model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patientlist :PatientModel;
  constructor(private service: PatientsService,private ref :ChangeDetectorRef) { }

  ngOnInit() {
    this.service.getPatientsList().subscribe(data => {
      this.patientlist = data;
      this.ref.detectChanges();
      console.log(this.patientlist);
    });
  }

}
