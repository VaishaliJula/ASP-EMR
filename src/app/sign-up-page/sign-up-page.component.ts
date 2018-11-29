import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  signupTitle = 'Register Here';
  salutation = [
    {id:1,name:'Mr'},
    {id:2,name:'Ms'},
    {id:3,name:'Mrs'},
  ];

  race = [
    {id:1, name:'American Indian or Alaska Native' },
    {id:2, name:'Asian'},
    {id:3, name:'Black or African American' },
    {id:4, name:'Native Hawaiian or Other Pacific Islander' },
    {id:5, name:'White'}
    ];

  ethinicity = [
    {id:1, name:'Hispanic or Latino'},{id:2, name:'Not Hispanic or Latino'}
  ];
  disability =[
    {id:1, name:'Disabled'},
    {id:2,name:'Not Disabled'}
  ];
  maritalStatus = [
    {id:1, name:'Single'},{id:2, name:'Married'}
  ];

  registrationForm;
  constructor(private service: RegistrationService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registrationForm = new FormGroup({
      salutation: new FormControl(null, Validators.required),
      firstName: new FormControl("", Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10),Validators.pattern("")])),
      lastName: new FormControl("", Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10),Validators.pattern("")])),
      gender: new FormControl("", Validators.required),
      dob: new FormControl("", Validators.required),
      race: new FormControl(null, Validators.required),
      ethnicity: new FormControl(null, Validators.required),
      occupation: new FormControl("", Validators.compose([Validators.required,Validators.pattern("")])),
      maritalStatus: new FormControl(null, Validators.required),
      disabilityStatus: new FormControl(null, Validators.required),
      address1: new FormControl("", Validators.compose([Validators.required,Validators.maxLength(30)])),
      address2: new FormControl(""),
      zip: new FormControl("", Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(5)])),
      city: new FormControl("", Validators.compose([Validators.required,Validators.pattern("")])),
      state: new FormControl("", Validators.compose([Validators.required,Validators.pattern("")])),
      mobileNumber: new FormControl("", Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10)])),
      kinFirst: new FormControl("", Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10),Validators.pattern("")])),
      kinLast: new FormControl("", Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10),Validators.pattern("")])),
      kinTelephone: new FormControl("", Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(10)])),
      relationship: new FormControl("", Validators.compose([Validators.required,Validators.pattern("")])),
    });
  }
  addPatient(value) {
    if (this.registrationForm.invalid) {
      alert('Please enter all the fields');
      console.log(this.registrationForm.value);
    }
    else {
      this.service.registerPatient(value);
      alert("Form submitted");
      this.registrationForm.reset();
      
    }

  }

}
