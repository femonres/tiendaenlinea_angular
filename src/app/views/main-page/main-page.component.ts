import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  productList: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().snapshotChanges().subscribe(
      item => {
        this.productList = [];
        item.forEach(element => {
          const product = element.payload.toJSON();
          product['$key'] = element.key;

          this.productList.push(product as Product);
        });
      }
    );
  }

}
