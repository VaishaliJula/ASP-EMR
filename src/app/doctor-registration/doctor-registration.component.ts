import { DoctorRegistrationService } from './../doctor-registration.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { DateUtilsService } from "../date-utils.service";
import { dateMaxValidator } from 'src/app/date-max-validator';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent implements OnInit {

  today = this.dateUtils.formatForDomInput(new Date());

  registrationForm;
  constructor(private service: DoctorRegistrationService, private snackbar: MatSnackBar, private dateUtils: DateUtilsService) { }


  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(20), Validators.pattern("^[a-zA-Z]+$")])),
      lastName: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(20), Validators.pattern("^[a-zA-Z]+$")])),
      dob: new FormControl("", [Validators.required, dateMaxValidator(this.today)]),
      address1: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(30)])),
      address2: new FormControl(""),
      zip: new FormControl("", Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern("^[0-9]+$")])),
      city: new FormControl("", Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z ]+$")])),
      state: new FormControl("", Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z ]+$")])),
      mobileNumber: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^[0-9]+$")])),
      email: new FormControl("", Validators.compose([Validators.required, Validators.pattern("")])),
    });
  }


  addDoctor(value) {
    if (this.registrationForm.invalid) {
      this.snackbar.open('Please enter / correct all the fields!', '', {
        duration: 3000
      });
      return;
    }
    else {
      this.service.registerDoctor(value);
      this.registrationForm.reset();
    }
  }
}
