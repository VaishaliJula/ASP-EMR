import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialogRef } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  userPhone;
  userPassword;
  constructor(private http: HttpService, private router: Router, private snackbar: MatSnackBar) { }

  registerPatient(formData) {
    this.userPassword = null;
    this.userPhone = null
    let url = 'patient/addPatient';
    return this.http.post(url,
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        salutation: formData.salutation,
        dob: formData.dob,
        race: formData.race,
        ethnicity: formData.ethnicity,
        gender: formData.gender,
        occupation: formData.occupation,
        maritalStatus: formData.maritalStatus,
        disabilityStatus: formData.disabilityStatus,
        addressline1: formData.address1,
        addressline2: formData.address2,
        zipCode: formData.zip,
        city: formData.city,
        state: formData.state,
        mobileNo: formData.mobileNumber,
        kin_First: formData.kinFirst,
        kin_Last: formData.kinLast,
        kin_Telephone: formData.kinTelephone,
        relationship: formData.relationship
      }).subscribe((res: any) => {
        if (res.userName === 'ERROR') {
          this.snackbar.open('Phone Number Already exsists!', '', {
            duration: 3000
          });
          return;
        }
        else {
          this.userPhone = res.userPhone;
          this.userPassword = res.password;
          this.router.navigate(['/loginDetails']);
          this.snackbar.open('Patient Registered successfully!', '', {
            duration: 3000
          });
        }
      });
  }
}

