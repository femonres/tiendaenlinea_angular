import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Product } from './../models/product';

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

  addProductInCart(product: Product, amount: number, uid: string) {
    this.productsInCart.push({
      id: product.$key,
      product: {
        name: product.name,
        picture: product.picture,
        price: product.price,
        avalible: product.avalible
      },
      amount: amount
    }).then((err) => {
      if (err) {
        console.log('Fallo?', err);
      }

      this.updateProductInStorage(product, product.avalible - amount);
    });
  }

  payProductsInCart() {
    return this.productsInCart.remove();
  }

  returnProductsInCart() {}

  updateProductInStorage(product: Product, avalible: number) {
    // return this.productList.update(productKey, {avalible: avalible});
    return this.firebase.list('product').update(product.$key, {avalible: avalible});
  }
}
