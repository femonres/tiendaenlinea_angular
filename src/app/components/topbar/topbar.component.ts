import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(public auth: AuthService, public location: Location) { }

  ngOnInit() {
  }

  onLogOut() {
    this.auth.logOut()
      .then(() => {
        this.location.go('login');
      })
      .catch((err) => {
        console.error('No es posible cerrar sesión', err);
      });
  }
}
