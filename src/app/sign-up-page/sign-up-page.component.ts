import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  signupTitle = 'Register Here';

  constructor() { }

  ngOnInit() {
  }
 }
