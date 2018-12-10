import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Appointment } from '../models/appointment.model';
import { User } from '../models/User';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  email;
  appointments: Appointment[];
  pending: Appointment[];
  checkedIn: Appointment[];
  checkedOut: Appointment[];
  user: User;

  constructor(private route: ActivatedRoute, private http: HttpService, private authService: LoginService) {
    this.user = authService.getLoggedInUserDetails();
  }

  ngOnInit() {
    // const emailParam = this.route.snapshot.params['email'];
    // this.email = emailParam;
    if (this.user.userType === 'ADMIN') {
      this.http.get('appointments/today').subscribe((res: Appointment[]) => {
        this.appointments = res;
        this.pending = this.appointments.filter(
          appointment => appointment.status === 'PENDING'
        );
        this.checkedIn = this.appointments.filter(
          appointment => appointment.status === 'CHECKED_IN'
        );
        this.checkedOut = this.appointments.filter(
          appointment => appointment.status === 'CHECKED_OUT'
        );
      });
    }
    else if (this.user.userType === 'STAFF') {
      this.http.get(`appointments/today/` + this.user.userPhone).subscribe((res: Appointment[]) => {
        this.appointments = res;
        this.pending = this.appointments.filter(
          appointment => appointment.status === 'PENDING'
        );
        this.checkedIn = this.appointments.filter(
          appointment => appointment.status === 'CHECKED_IN'
        );
        this.checkedOut = this.appointments.filter(
          appointment => appointment.status === 'CHECKED_OUT'
        );
      });
    }
  }
}
