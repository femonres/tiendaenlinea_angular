import { Component, OnInit } from '@angular/core';
import { ProductInCart } from '../../models/productInCart';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  productsInCart: ProductInCart[];
  totalValue = 0;

  constructor(
    private authService: AuthService,
    private productService: ProductService,
    public router: Router,
    public flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.productService.getProductsInCart(this.authService.firbaseAuth.auth.currentUser.uid).snapshotChanges().subscribe(
      item => {
        this.productsInCart = [];
        item.forEach(element => {
          const inCart = element.payload.toJSON() as ProductInCart;
          this.totalValue += (inCart.product.price * inCart.amount);
          this.productsInCart.push(inCart);
        });
      }
    );
  }

  payItemsInCart() {
    this.productService.payProductsInCart().then(_ => {
      this.router.navigate(['/']);
    });
  }

  returnItemsInCart() {
    this.productsInCart.forEach(element => {
      console.log('El producto es:', element);
      this.productService.updateProductInStorage(element.product, element.product.avalible + element.amount).then(_ => {
        this.productService.payProductsInCart();
      });
    });
  }

}
