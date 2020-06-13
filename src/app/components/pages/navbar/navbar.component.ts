import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;

  constructor(private authService: AuthService) {
   this.username = JSON.parse(sessionStorage.getItem('user')).email;
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
