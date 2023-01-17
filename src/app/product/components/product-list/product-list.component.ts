import {
  Component,
  ViewChildren,
  type QueryList,
} from '@angular/core';
import { ProductService } from "../../services/product.service";
import {ProductComponent} from "../product/product.component";
import {ProductModel} from "../../models/product.model";
import {CartService} from "../../../cart/services/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent{
  @ViewChildren(ProductComponent)
  children!: QueryList<ProductComponent>;

  getProducts() {
    return this.productService.getProducts();
  }

  onAddToCart(product: ProductModel): void {
    this.cartService.addProduct(product);
  }

  constructor(private productService: ProductService, private cartService: CartService) {
  }
}
