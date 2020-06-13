import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private apiUrl = 'https://pruebatecnica.puntosleal.com/';

  constructor( private http: HttpClient ) { }

  getTransactions( startDate: any, endDate: any ) {
    let url = `${ this.apiUrl }api/user/my/transactions`;
    url += this.checkDates(startDate, endDate);
    const token = sessionStorage.getItem('token');

    const HEADERS = new HttpHeaders({
      Authorization: `Bearer ${ token }`
    });

    return this.http.get(url , { headers: HEADERS })
            .pipe( map ( (response: any) => response.data ));
  }

  checkDates( startDate: any, endDate: any ): string {
    if ( startDate !== '' && endDate !== '' ) {
      return `?startDate=${startDate}&endDate=${endDate}`;
    } else if ( startDate !== '' ) {
      return `?startDate=${startDate}`;
    } else if ( endDate !== '' ) {
      return `?endDate=${endDate}`;
    }
    return '';
  }

}
