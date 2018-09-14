import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  signupTitle = 'Register Here';
  registrationForm;
  constructor( private service: RegistrationService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
  this.registrationForm = new FormGroup({
  salutation : new FormControl("",Validators.required),
  firstName : new FormControl("Vamshi",Validators.required), 
  lastName : new FormControl("",Validators.required), 
  mrnum : new FormControl("",Validators.required), 
  gender : new FormControl("",[Validators.required,Validators.minLength(4)]), 
  dob : new FormControl("",Validators.required), 
  race : new FormControl("",Validators.required), 
  ethnicity : new FormControl("",Validators.required), 
  occupation : new FormControl("",Validators.required), 
  ssn : new FormControl("",Validators.required), 
  genderIdentity : new FormControl("",Validators.required), 
  sexOrientation : new FormControl("",Validators.required), 
  preferredLanguage : new FormControl("",Validators.required), 
  communicationPreferrence : new FormControl("",Validators.required), 
  maritalStatus : new FormControl("",Validators.required), 
  disabilityStatus : new FormControl("",Validators.required), 
  address1 : new FormControl("",Validators.required), 
  address2 : new FormControl("",Validators.required), 
  zip : new FormControl("",Validators.required), 
  city : new FormControl("",Validators.required), 
  state : new FormControl("",Validators.required), 
  homeTelephone : new FormControl("",Validators.required), 
  mobileNumber : new FormControl("",Validators.required), 
  firstVisit : new FormControl("",Validators.required), 
  kinFirst : new FormControl("",Validators.required), 
  kinLast : new FormControl("",Validators.required), 
  kinAddress : new FormControl("",Validators.required), 
  kinTelephone : new FormControl("",Validators.required),
  relationship : new FormControl("",Validators.required),     
  });
}
addPatient(value){
  this.service.registerPatient(value);
  this.registrationForm.reset();
}

}
