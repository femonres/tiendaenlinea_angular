import { Component, OnInit, Input } from '@angular/core';
import { ProductInCart } from '../../models/productInCart';

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.css']
})
export class ProductInCartComponent implements OnInit {

  @Input() item: ProductInCart;

  constructor() { }

  ngOnInit() {
  }

}
