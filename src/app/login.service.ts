import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isUserLoggedIn: boolean; 
  userEmail: string;
  loggedInUser: User;

  constructor(private router: Router, private httpClient: HttpService) {
    this.isUserLoggedIn = false;
  }

  validateLoginStaff(formData): void {
    const loginURL = 'login/';
    const queryParams = { phone: formData.phone, password: formData.password };

    this.httpClient
      .get(loginURL, { params: queryParams, observe: 'response' })
      .subscribe((res: any) => {
        Object.keys(res.body);

        if (res.status === 200) {
          this.loggedInUser = res.body;
          this.isUserLoggedIn = true;
          this.userEmail = formData.phone;
          if(this.loggedInUser.userType === 'PATIENT'){
            this.router.navigate(['/appointments']);
          }
          else{
            this.router.navigate(['/dashboard']);
          }
        }
      });
  }

  getUserLoggedIn() {
    if (this.isUserLoggedIn) {
      return true;
    }
    // this.router.navigate(['']);
    console.log('Unauthorized access');
    return false;
    // return false;
  }

  logout() {
    this.isUserLoggedIn = false;
    this.userEmail = null;
    this.loggedInUser = null;
  }

  getLoggedInUserEmail() {
    return this.userEmail;
  }

  getLoggedInUserDetails() {
    return this.loggedInUser;
  }
}
