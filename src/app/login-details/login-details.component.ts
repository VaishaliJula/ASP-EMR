import { SignUpPageComponent } from './../sign-up-page/sign-up-page.component';
import { DoctorRegistrationService } from './../doctor-registration.service';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from "./../registration.service";

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})
export class LoginDetailsComponent implements OnInit {
  userName: any;
  password: any;

  dUserName: any;
  dPassword: any;

  constructor(private authService: RegistrationService, private service: DoctorRegistrationService) {
    this.userName = authService.userPhone;
    this.password = authService.userPassword;

    this.dUserName = service.userPhone
    this.dPassword = service.userPassword
  }

  ngOnInit() {
    // this.userName = null ;
    // this.password = null;
  
    // this.dUserName= null;
    // this.dPassword =null;
  }

}
