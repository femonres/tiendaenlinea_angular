import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Product } from './../../models/product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModalWithComponent() {
    const modalRef = this.modalService.open(ProductDetailComponent, {size: 'lg'});
    modalRef.componentInstance.product = this.product;
  }
}
