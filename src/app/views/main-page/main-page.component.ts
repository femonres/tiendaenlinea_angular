import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { ProductInCart } from './../../models/productInCart';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  productList: Product[];
  productsInCart: ProductInCart[];

  constructor(private authService: AuthService, private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().snapshotChanges().subscribe(item => {
      this.productList = [];
      console.log('Cambio en la DB detectado', item);
      item.forEach(element => {
        const product = element.payload.toJSON();
        product['$key'] = element.key;

        this.productList.push(product as Product);
      });
    });

    this.authService.firbaseAuth.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.productService.getProductsInCart(authUser.uid).snapshotChanges().subscribe(item => {
          this.productsInCart = [];
          item.forEach(element => {
            const inCart = element.payload.toJSON();
            this.productsInCart.push(inCart as ProductInCart);
          });
        });
      }
    });
  }

}
