import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: Http) { }

  registerPatient(formData){
    let url ='http://localhost:8080/patient/addPatient/5225';
    this.http.post(url,
      {mrnum:formData.mrnum,
      firstName:formData.firstName,
      lastName :formData.lastName,
      salutation:formData.salutation,
      dob:formData.dob,
      race:formData.race,
      ethnicity:formData.ethnicity,
      gender:formData.gender,
      genderIdentity:formData.genderIdentity,
      occupation:formData.occupation,
      sexOrientation :formData.sexOrientation,
      maritalStatus:formData.maritalStatus,
      preferredLanguage:formData.preferredLanguage,
      communicationPreferences:formData.communicationPreferences,
      disabilityStatus:formData.disabilityStatus,
      firstVisit:formData.firstVisit,
      ssn:formData.ssn,
      addressline1:formData.address1,
      addressline2 :formData.address2,
      zipCode:formData.zip,
      city:formData.city,
      state:formData.state,
      homeTelephone:formData.homeTelephone,
      mobileNo:formData.mobileNumber,
      kin_First:formData.kinFirst,
      kin_Last:formData.kinLast,
      kin_Address:formData.kinAddress,
      kin_Telephone:formData.kinTelephone,
      relationship:formData.relationship
    }).subscribe();
  }
}
