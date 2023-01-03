import { Component } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [CartService]
})
export class ProductComponent {
  onAddToCart() {
    console.log("The product has been added");
  }
  constructor(private cartService: CartService) {
  }
}
