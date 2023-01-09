import { Injectable } from '@angular/core';
import {CartModel} from "../models/cart.model";

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cart: CartModel = new CartModel();

  getCart(): CartModel {
    return this.cart;
  }
}
