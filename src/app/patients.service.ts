import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientModel } from 'src/app/patients/models/patient.model';
import { HttpService } from './http.service';
import { Patient } from 'src/app/models/Patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  constructor(private httpClient: HttpService) { }

  getPatientDetails(mrNum: number) {
    const url = `patient/${mrNum}`;
    return this.httpClient.get(url);
  }

  getPatientDetailsByName(firstName: String, lastName: String) {
    const url = `patient/get`;
    const queryParams = { firstName: firstName, lastName: lastName};
    return this.httpClient
      .get(url, { params: queryParams, observe: 'response' });
  }

  getPatientDetailsByPhone(phone: any) {
    const url = `patient/login`;
    const queryParams = { phone: phone };
    return this.httpClient.get(url, { params: queryParams, observe: 'response'});
  }

  updatePatient(patient: Patient) {
    const url = `patient/updatePatient`;
    return this.httpClient.put(url, patient);
  }

  getPatientsList(): Observable<PatientModel> {
    const url = 'patient/allPatients';
    return Observable.create(observer => {
      this.httpClient.get<PatientModel>(url).subscribe(
        (patientList: PatientModel) => {
          observer.next(patientList);
        },
        (error: HttpErrorResponse) => {
          console.warn(error);
          console.error(error);
        },
        () => observer.complete()
      );
    });
  }
}
