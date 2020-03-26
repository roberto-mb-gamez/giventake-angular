import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

  get primaryImageSrc() {
    const hasMedia = this.product && this.product.media && this.product.media.length > 0;
    return hasMedia ? this.product.media[0].url : null;
  }

}
