import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }
  validateLoginStaff(formData){
    let staffURL ='http://localhost:8080/staff/entireStaff';
    this.http.get(staffURL).subscribe();
  }
}
