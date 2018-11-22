import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HospitalStaffService {
  constructor(private http: HttpService) {}

  getAllDoctors() {
    const url = 'staff/entireStaff';
    return this.http.get(url);
  }
}
