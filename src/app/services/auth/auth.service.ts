import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginCredentials } from '../../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://pruebatecnica.puntosleal.com/';

  constructor( private http: HttpClient, private router: Router ) { }

  login( loginCredentials: LoginCredentials ): any {
    const url = `${ this.apiUrl }api/user/login`;
    return this.http.post(url , loginCredentials);
  }

  isLoggedIn() {
    if ( JSON.parse(sessionStorage.getItem('user')) == null || JSON.parse(sessionStorage.getItem('user')) == null ) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

}
