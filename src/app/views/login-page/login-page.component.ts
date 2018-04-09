import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public userEmail: string;
  public userPasswd: string;

  constructor(
    public router: Router,
    public authService: AuthService,
    public flashMessage: FlashMessagesService
  ) { }

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
        this.flashMessage.show('Usuario y/o contraseña no validos.', {cssClass: 'alert-danger', timeout: 5000});
        // this.router.navigate(['/login']);
      });
  }
}
