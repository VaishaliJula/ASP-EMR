import { Injectable } from '@angular/core';
import { Soap } from './models/Soap.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SoapService {
  constructor(private http: HttpService) {}

  addSoap(soap: Soap) {
    const url = `soap`;
    return this.http.post(url, soap);
  }

  getPatientSoap(mrNum) {
    const url = `soap/${mrNum}`;
    return this.http.get(url);
  }

  getPatientSoapforPhone(phone : any){
    const url = `soap/phone/${phone}`;
    return this.http.get(url); 
  }
}
