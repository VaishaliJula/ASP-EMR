import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../patients.service';
import { Patient } from '../models/Patient.model';
import { Doctor } from '../models/Doctor.model';
import { HospitalStaffService } from '../hospital-staff.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  slots: string[];
  mrNum: number;
  patientName: string;
  doctors: Doctor[];

  findPatient() {
    this.patientService
      .getPatientDetails(this.mrNum)
      .subscribe((res: Patient) => {
        this.patientName = res.firstName + ' ' + res.lastName;
      });
  }

  constructor(
    private patientService: PatientsService,
    private staffService: HospitalStaffService
  ) {
    this.staffService.getAllDoctors().subscribe((res: Doctor[]) => {
      this.doctors = res;
    });
    this.slots = [];
    const d = new Date();
    d.setHours(9);
    d.setMinutes(0);
    while (d.getHours() <= 18) {
      this.slots.push(d.getHours() + ' : ' + d.getMinutes());
      d.setMinutes(d.getMinutes() + 30);
    }
  }

  ngOnInit() {}
}
