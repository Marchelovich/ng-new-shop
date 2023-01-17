import { Component,  QueryList,  ViewChildren} from '@angular/core';
import { CartService } from "../../services/cart.service";
import {CartItemModel} from "../../models/cart-item.model";
import {CartItemComponent} from "../cart-item/cart-item.component";
import {ProductComponent} from "../../../product/components/product/product.component";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})

export class CartListComponent {
  @ViewChildren(CartItemComponent)
  children!: QueryList<ProductComponent>;

  getCartItems(): Array<CartItemModel> {
    return this.cartService.getProducts();
  }

  getCartSum(): number {
    return this.cartService.totalCost;
  }

  getCartQuantity(): number {
    return this.cartService.totalQuantity;
  }

  trackByCartItem(index: number, item: CartItemModel) {
    return item.getProduct().name;
  }

  constructor(private cartService: CartService) {
  }

  onQuantityIncrease(item: CartItemModel): void {
    this.cartService.quantityIncrease(item);
  }

  onQuantityDecrease(item: CartItemModel): void {
    this.cartService.quantityDecrease(item);
  }

  onDeleteItem(item: CartItemModel): void {
    this.cartService.removeProduct(item)
  }
}
