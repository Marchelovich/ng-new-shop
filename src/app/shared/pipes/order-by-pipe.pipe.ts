import { Pipe, PipeTransform } from '@angular/core';
import {CartItemModel} from "../../cart/models/cart-item.model";
import {ProductModel} from "../../product/models/product.model";

@Pipe({
  name: 'orderByPipe'
})
export class OrderByPipePipe implements PipeTransform {

  transform(cartItems: CartItemModel[], key: keyof ProductModel, isAsc: boolean = false) {
    const order = isAsc ? 1 : -1;
    return cartItems.sort((a, b) => {
        return a.getProduct()[key] > b.getProduct()[key] ? order : -order;
    });
  }

}
