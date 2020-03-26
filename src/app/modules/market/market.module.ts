import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
import { CategoryMenuItemComponent } from "./category-menu-item/category-menu-item.component";
import { CategoryMenuComponent } from "./category-menu/category-menu.component";
import { ProductsPageComponent } from "./products-page/products-page.component";
import { ProductCartComponent } from "./product-cart/product-cart.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { SharedModule } from "../shared/shared.module";
import { ProductViewPageComponent } from "./product-view-page/product-view-page.component";
import { ProductEditPageComponent } from "./product-edit-page/product-edit-page.component";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/new', component: ProductEditPageComponent },
  { path: 'products/:id', component: ProductViewPageComponent }
];

@NgModule({
  declarations: [
    CategoryMenuItemComponent,
    CategoryMenuComponent,
    ProductsPageComponent,
    ProductCartComponent,
    ProductListComponent,
    ProductViewPageComponent,
    ProductEditPageComponent,
    ProductDetailsComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MarketModule {}
