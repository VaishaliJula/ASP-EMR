import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  email;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
   let emailParam = this.route.snapshot.params['email'];
   this.email = emailParam;
   console.log(this.email);
  }

}
