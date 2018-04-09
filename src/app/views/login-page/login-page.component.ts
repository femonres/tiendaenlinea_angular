import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public userEmail: string;
  public userPasswd: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onLoginUser() {
    this.authService.validateUser(this.userEmail, this.userPasswd)
      .then((res) => {
        console.log('Login correcto', res);
        this.router.navigate(['/']);
      })
      .catch((err) => {
        console.error('Ops', err);
        this.router.navigate(['/login']);
      });
  }
}
