import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/login.service';
// import { FormGroup } from '@angular/forms/src/model';
import { ForgotPasswordComponent } from 'src/app/forgot-password/forgot-password.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginTitle = 'Sign In';
  loginForm;
  constructor(private service: LoginService) {}

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.loginForm = new FormGroup({
      phone: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^[0-9]+$/)])),
      password: new FormControl('', Validators.required)
    });
  }
  checkRole(value) {
    if (this.loginForm.invalid) {
      alert('Please enter Valid Credentials');
    } else {
      this.service.validateLoginStaff(value);
      this.loginForm.reset();
    }
  }
}
