import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isUserLoggedIn: boolean;
  constructor(private router: Router, private httpClient: HttpClient) {
    this.isUserLoggedIn = false;
  }

  validateLoginStaff(formData): void {
    let staffURL = 'http://localhost:8080/staff/login';
    let queryParams = { email: formData.email, password: formData.password };

    this.httpClient.get(staffURL, { params: queryParams, observe: 'response' }).subscribe((res) => {
    (Object.keys(res.body));
  
      if (res.status == 200) {
        this.isUserLoggedIn = true;
        this.router.navigate(['/PatientDashboard', formData.email]);
      }
    });
  }

  getUserLoggedIn() {
    if (this.isUserLoggedIn) {
      return true;
    } 
    this.router.navigate(['']);
    console.log('Unauthorized access');
    return false;
  }
}
