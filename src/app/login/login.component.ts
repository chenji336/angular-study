import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Router, NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.setMessage();
  }

  ngOnInit() {
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/login';
        this.setMessage();
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        }
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  logout(): void {
    this.authService.loginout();
    this.setMessage();
  }

}
