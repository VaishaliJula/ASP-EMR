import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  pageTitle: String  = 'Appointment Scheduler';
  appointments: any[] = [
  {
    'mr': 101,
    'patientName': 'va',
    'soapType': 'Initial Visit',
    'acc': '1011',
    'dob': '1984',
    'insurance': 'packing grp',
    'status': 'Yet to arrive',
    'ehrtype': 'Out-Patient',
    'department': 'Cardiac'
    },
    {
    'mr': 102,
    'patientName': 'Shelly',
    'soapType': 'Initial Visit',
    'acc': '1011',
    'dob': '1984',
    'insurance': 'packing grp',
    'status': 'Yet to arrive',
    'ehrtype': 'Out-Patient',
    'department': 'Cardiac'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
