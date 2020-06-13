import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
import { LoginCredentials } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  input: LoginCredentials;

  emailError = false;
  passwordError = false;
  nonFieldError = false;
  errorMessage: string;


  constructor( private authService: AuthService, private router: Router ) {
    this.authService.isLoggedIn();
    this.errorMessage = '';
  }

  ngOnInit() {
    this.input = {
      email: '',
      password: ''
    };
  }

  login() {
    this.clearErrors();
    if (this.checkErrors() === 0) {
      this.authService.login(this.input)
      .subscribe( ( response: any ) => {
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate(['/home']);
      },
      ( error: any ) => {
        console.log(error);
        this.setErrors(error);
      });
    }
  }

  clearErrors() {
    this.passwordError = false;
    this.emailError = false;
    this.nonFieldError = false;
    this.errorMessage = '';
  }

  checkErrors() {
    let count = 0;
    if (this.input.password === undefined || this.input.password === '') {
      this.passwordError = true;
      count++;
    }
    if (this.input.email === undefined || this.input.email === '') {
      this.emailError = true;
      count++;
    }
    return count;
  }

  setErrors( err: any ) {
    if (err.error.message) {
      this.errorMessage = err.error.message;
      this.nonFieldError = true;
     }
  }


}
