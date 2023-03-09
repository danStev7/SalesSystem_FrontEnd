import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listsales } from '../models/readsales.interface';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private myAppUrl = 'https://localhost:7257/';
  private myApiUrl = 'api/sales/';
  constructor(private http: HttpClient) { }

  getAllSales(): Observable<Listsales[]> {
    return this.http.get<Listsales[]>(this.myAppUrl + this.myApiUrl);
  }

  saveSale(sale:any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, sale)
  }

  updateSale(id:number, sale:any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, sale);
  }

  deleteSale(id:number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }
}
