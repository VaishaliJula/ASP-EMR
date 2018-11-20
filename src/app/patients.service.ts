import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientModel } from 'src/app/patients/models/patient.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private httpClient : HttpService ) { }

  getPatientsList() : Observable<PatientModel> {
    let url ='patient/allPatients';
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
