import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Doctor } from '../models/Doctor.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  doctor: Doctor;

  constructor(private authService: LoginService) {
    this.email = authService.getLoggedInUserEmail();
    this.doctor = authService.getLoggedInUserDetails();
  }
  email;

  logout() {
    this.authService.logout();
  }
  ngOnInit() {}
}
