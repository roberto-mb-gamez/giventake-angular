import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/model';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  @Input() categories: Category[];
  @Output() categoryChanged = new EventEmitter<Category>();
  selectedCategoryName: string;

  constructor() { }

  ngOnInit() {
  }

  onCategorySelected(categoryName: string) {
    const cat = this.categories.find(c => c.name === categoryName);
    this.selectedCategoryName = cat.name;
    this.categoryChanged.emit(cat);
  }

}
