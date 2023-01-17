import { Injectable } from '@angular/core';
import {CartModel} from "../models/cart.model";
import {ProductModel} from "../../product/models/product.model";
import {CartItemModel} from "../models/cart-item.model";

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private _cart: CartModel = new CartModel();

  get cart(): CartModel {
    return this._cart;
  }

  get totalCost(): number {
    return this._cart.getTotalCost();
  }

  get totalQuantity(): number {
    return this._cart.getTotalQuantity();
  }

  get isEmptyCard(): boolean {
    return this._cart.getItems().length === 0;
  }

  getProducts(): Array<CartItemModel> {
    return this._cart.getItems();
  }

  addProduct(product: ProductModel, quantity: number = 1): void {
    this._cart.addProduct(product, quantity);
  }

  removeProduct(product: CartItemModel): void {
    this._cart.deleteItem(product);
  }

  removeAllProducts(): void {
    this._cart.clearCart();
  }

  quantityIncrease(item: CartItemModel): void {
    this._cart.quantityIncrease(item);
  }

  quantityDecrease(item: CartItemModel): void {
    this._cart.quantityDecrease(item);
  }
}
