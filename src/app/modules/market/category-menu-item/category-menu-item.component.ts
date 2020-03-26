import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-menu-item',
  templateUrl: './category-menu-item.component.html',
  styleUrls: ['./category-menu-item.component.css']
})
export class CategoryMenuItemComponent implements OnInit {

  @Input() categoryName: string;
  @Output() selected = new EventEmitter<string>();
  @Input() checked = false;

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.selected.emit(this.categoryName);
  }

}
