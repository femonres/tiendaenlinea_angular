import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { ProductInCart } from '../../models/productInCart';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Input() inCart: ProductInCart;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  onLogOut() {
    this.auth.logOut();
  }
}
