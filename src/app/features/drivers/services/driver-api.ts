import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DriverApi {
  private apiUrl = 'WRITE_YOUR_ACTUAL_MOCKAPI_URL_HERE';

  constructor(private http: HttpClient) {}

  getDrivers() {
    return this.http.get(this.apiUrl);
  }
}