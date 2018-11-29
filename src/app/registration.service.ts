import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpService) { }

  registerPatient(formData){
    let url ='patient/addPatient';
    this.http.post(url,
      {
      firstName:formData.firstName,
      lastName :formData.lastName,
      salutation:formData.salutation,
      dob:formData.dob,
      race:formData.race,
      ethnicity:formData.ethnicity,
      gender:formData.gender,
      occupation:formData.occupation,
      maritalStatus:formData.maritalStatus,
      disabilityStatus:formData.disabilityStatus,
      addressline1:formData.address1,
      addressline2 :formData.address2,
      zipCode:formData.zip,
      city:formData.city,
      state:formData.state,
      mobileNo:formData.mobileNumber,
      kin_First:formData.kinFirst,
      kin_Last:formData.kinLast,
      kin_Telephone:formData.kinTelephone,
      relationship:formData.relationship
    }).subscribe();
  }
}
