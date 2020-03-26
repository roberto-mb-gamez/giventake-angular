import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../../model';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.css']
})
export class ProductViewPageComponent implements OnInit {

  product: Product;
  isBusy = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productsService: ProductsService
  ) { }

  ngOnInit() {
    const productId = +this.route.snapshot.paramMap.get('id');
    this.isBusy = true;

    try {
      this.productsService.loadProduct(productId).then(p => this.product = p);
    } finally {
      this.isBusy = false;
    }
  }

}
