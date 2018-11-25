import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../patients.service';
import { Patient } from '../models/Patient.model';
import { SoapService } from '../soap.service';
import { Soap } from '../models/Soap.model';

@Component({
  selector: 'app-patient-charts',
  templateUrl: './patient-charts.component.html',
  styleUrls: ['./patient-charts.component.css']
})
export class PatientChartsComponent implements OnInit {
  mrNum;
  patient: Patient;
  soaps: Soap[];
  constructor(
    private patientService: PatientsService,
    private soapService: SoapService
  ) {}

  ngOnInit() {}

  findPatient() {
    this.patientService.getPatientDetails(this.mrNum).subscribe(patient => {
      this.patient = patient;
      this.patient.addr =
        this.patient.addressline1 +
        '\n' +
        this.patient.addressline2 +
        '\n' +
        this.patient.city +
        '\n' +
        this.patient.state +
        '\n' +
        this.patient.zipCode;
    });
    this.soapService
      .getPatientSoap(this.mrNum)
      .subscribe(soaps => (this.soaps = soaps));
  }
}
