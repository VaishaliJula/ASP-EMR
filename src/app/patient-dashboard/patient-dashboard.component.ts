import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Appointment } from '../models/appointment.model';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  email;
  appointments: Appointment[];

  constructor(private route: ActivatedRoute, private http: HttpService) {}

  ngOnInit() {
    // const emailParam = this.route.snapshot.params['email'];
    // this.email = emailParam;
    this.http
      .get('appointments/today')
      .subscribe((res: Appointment[]) => this.appointments = res);
  }
}
