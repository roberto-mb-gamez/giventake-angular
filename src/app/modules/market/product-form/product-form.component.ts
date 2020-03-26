import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category, NewProduct } from 'src/app/model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() categories: Category[];
  @Output() productSubmit = new EventEmitter<NewProduct>();

  product: NewProduct = {
    title: '',
    description: '',
    category: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(ok) {
    this.productSubmit.emit(ok ? this.product : null);
  }

}
