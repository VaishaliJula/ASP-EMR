import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { PatientModel } from 'src/app/patients/models/patient.model';
@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private httpClient : HttpClient ) { }

  getPatientsList() : Observable<PatientModel> {
    let url ='http://localhost:8080/patient/allPatients';
    return Observable.create((observer) =>{
      this.httpClient.get<PatientModel>(url).subscribe(
        (patientList : PatientModel) => {observer.next(patientList)},
        (error : HttpErrorResponse) => {
          console.warn(error);
          console.error(error);
        },
        () => observer.complete()
      );
    });
  }
}
