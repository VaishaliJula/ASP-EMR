import { User } from './../models/User';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/registration.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  userPhone: any;
  userPassword: any;
  signupTitle = 'Register Here';
  salutation = [
    { id: 1, name: 'Mr' },
    { id: 2, name: 'Ms' },
    { id: 3, name: 'Mrs' },
  ];

  race = [
    { id: 1, name: 'American Indian or Alaska Native' },
    { id: 2, name: 'Asian' },
    { id: 3, name: 'Black or African American' },
    { id: 4, name: 'Native Hawaiian or Other Pacific Islander' },
    { id: 5, name: 'White' }
  ];

  ethinicity = [
    { id: 1, name: 'Hispanic or Latino' }, { id: 2, name: 'Not Hispanic or Latino' }
  ];
  disability = [
    { id: 1, name: 'Disabled' },
    { id: 2, name: 'Not Disabled' }
  ];
  maritalStatus = [
    { id: 1, name: 'Single' }, { id: 2, name: 'Married' }
  ];

  registrationForm;
  constructor(private service: RegistrationService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registrationForm = new FormGroup({
      salutation: new FormControl(null, Validators.required),
      firstName: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(20), Validators.pattern("^[a-zA-Z]+$")])),
      lastName: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(20), Validators.pattern("^[a-zA-Z]+$")])),
      gender: new FormControl("", Validators.required),
      dob: new FormControl("", Validators.required),
      race: new FormControl(null, Validators.required),
      ethnicity: new FormControl(null, Validators.required),
      occupation: new FormControl("", Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z ]+$")])),
      maritalStatus: new FormControl(null, Validators.required),
      disabilityStatus: new FormControl(null, Validators.required),
      address1: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(30)])),
      address2: new FormControl(""),
      zip: new FormControl("", Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern("^[0-9]+$")])),
      city: new FormControl("", Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z ]+$")])),
      state: new FormControl("", Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z ]+$")])),
      mobileNumber: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(9), Validators.pattern("^[0-9]+$")])),
      kinFirst: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern("^[a-zA-Z]+$")])),
      kinLast: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern("^[a-zA-Z]+$")])),
      kinTelephone: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^[0-9]+$")])),
      relationship: new FormControl("", Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z]+$")])),
    });
  }

  addPatient(value) {
    if (this.registrationForm.invalid) {
      this.snackbar.open('Please enter / correct all the fields!', '', {
        duration: 3000
      });
    }
    else {
      this.service.registerPatient(value);
      this.registrationForm.reset();
    }
  }
}
