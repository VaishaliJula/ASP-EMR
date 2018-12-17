import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  get<T>(relativeUrl, options?: any): any {
    const url = this.getUrl(relativeUrl);
    return this.http.get<T>(url, options);
  }

  post<T>(relativeUrl, data): Observable<T> {
    const url = this.getUrl(relativeUrl);
    return this.http.post<T>(url, data);
  }

  put<T>(relativeUrl, data): Observable<T> {
    const url = this.getUrl(relativeUrl);
    return this.http.put<T>(url, data);
  }

  getUrl(relativeUrl) {
    return `${this.baseUrl}/${relativeUrl}`;
  }
}
