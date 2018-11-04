import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { LoginService } from 'src/app/login.service'
// import { FormGroup } from '@angular/forms/src/model';

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
  createForm(){
    this.loginForm = new FormGroup({
      email : new FormControl("",Validators.required),
      password : new FormControl("",Validators.required)
    });
    
  }
  checkRole(value){
    this.service.validateLoginStaff(value);
    this.loginForm.reset();
  }
}
