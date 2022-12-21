import { Component } from '@angular/core';
import { CartService } from "../../services/cart.service";
import { ProductModel } from "../../../product/models/product.model";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  // providers: [CartService]
})

export class CartListComponent {
  getCart(): Array<ProductModel> {
    return this.cartService.getProducts();
  }

  trackByCartItem(index: number, item: ProductModel) {
    return item.name;
  }

  constructor(private cartService: CartService) {
    // this.cartService = cartService;
  }
}
