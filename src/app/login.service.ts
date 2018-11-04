import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private httpClient : HttpClient) { }

  validateLoginStaff(formData){
    let staffURL ='http://localhost:8080/staff/login';
    let queryParams = {email: formData.email,password: formData.password};
    var user =  this.httpClient.get(staffURL,{params :queryParams}).subscribe((res) =>{
      console.log(res);
    });       
  }
}
