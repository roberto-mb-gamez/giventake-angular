import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Category, NewProduct } from 'src/app/model';
import { CategoriesService } from '../../core/services/categories.service';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-product-edit-page',
  templateUrl: './product-edit-page.component.html',
  styleUrls: ['./product-edit-page.component.css']
})
export class ProductEditPageComponent implements OnInit {

  categories: Category[];
  isBusy = false;

  constructor(
    private readonly location: Location,
    private readonly categoriesService: CategoriesService,
    private readonly productsService: ProductsService
  ) { }

  onProductSubmit(newProduct: NewProduct) {
    if(!newProduct) {
      this.location.back();
    } else {
      this.isBusy = true;

      try {
        this.productsService.addProduct(newProduct)
            .then(o => this.location.back());
      } finally {
        this.isBusy = false;
      }
    }
  }

  ngOnInit() {
    this.isBusy = true;

    try {
      this.categoriesService.loadCategories()
        .then(c => this.categories = c);
    } finally {
      this.isBusy = false;
    }
  }

}
