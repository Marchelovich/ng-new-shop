import { NgModule } from '@angular/core';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent,
  ],
    imports: [
        SharedModule,
        FormsModule,
    ],
  exports: [
    CartItemComponent,
    CartListComponent
  ],
})

export class CartModule { }
