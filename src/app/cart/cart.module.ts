import { NgModule } from '@angular/core';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent,
  ],
    imports: [
        CommonModule,
        SharedModule,
    ],
  exports: [
    CartItemComponent,
    CartListComponent
  ],
})

export class CartModule { }
