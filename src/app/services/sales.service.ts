import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private myAppUrl = 'https://localhost:7257/';
  private myApiUrl = 'api/sales/';
  constructor(private http: HttpClient) { }

  getListSales(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
}
