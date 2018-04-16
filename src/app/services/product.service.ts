import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ProductService {

  productList: AngularFireList<any>;
  productsInCart: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getProducts() {
    return this.productList = this.firebase.list('products');
  }

  getProductsInCart(uid: string) {
    return this.productsInCart = this.firebase.list('products-in-cart/' + uid);
  }
}
