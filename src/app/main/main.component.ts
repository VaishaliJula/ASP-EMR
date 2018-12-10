import { User } from './../models/User';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: User;

  constructor(private authService: LoginService) {
    this.email = authService.getLoggedInUserEmail();
    this.user = authService.getLoggedInUserDetails();
  }
  email;

  logout() {
    this.authService.logout();
  }
  ngOnInit() {}
}
