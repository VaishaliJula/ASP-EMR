import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  pageTitle: String  = 'Appointment Scheduler';
  
  constructor() { }

  ngOnInit() {
  }

}
