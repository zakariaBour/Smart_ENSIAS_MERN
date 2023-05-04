import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  constructor(public searchService: SearchService,private loginService :  LoginService
    ,private router : Router) { }
  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('role');
    this.loginService.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
