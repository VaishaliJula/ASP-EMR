import { Router } from '@angular/router';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatDialogRef } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DoctorRegistrationService {

  constructor(private http: HttpService, private router: Router, private snackbar: MatSnackBar) { }

  userPhone: any;
  userPassword: any;

  registerDoctor(formData) {
    let url = 'staff/addStaff';
    this.http.post(url,
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        dob: formData.dob,
        addressline1: formData.address1,
        addressline2: formData.address2,
        zipCode: formData.zip,
        city: formData.city,
        state: formData.state,
        mobileNo: formData.mobileNumber,
        email: formData.email
      }).subscribe((res: any) => {
        if (res.userName == 'ERROR') {
          this.snackbar.open('Phone Number / Email Already exsists!', '', {
            duration: 3000
          });
          return;
        }
        else {
          this.userPhone = res.userPhone;
          this.userPassword = res.password;
          this.router.navigate(['/loginDetails']);
          this.snackbar.open('Doctor Registered successfully!', '', {
            duration: 3000
          });
        }
      });
  }
}
