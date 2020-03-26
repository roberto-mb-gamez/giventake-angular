import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

  get primaryImageSrc() {
    return this.product && this.product.media &&
      this.product.media.length > 0 ? this.product.media[0].url
                                    : null;
  }

}
