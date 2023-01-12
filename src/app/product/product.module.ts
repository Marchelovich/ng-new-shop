import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule
  //   BrowserModule,
  ],
  exports: [
    // ProductComponent,
    ProductListComponent,
  ],
  // providers: [],
  // bootstrap: []
})

export class ProductModule { }
