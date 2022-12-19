import { Injectable } from '@angular/core';
import { ProductModel } from "../../product/models/product.model";

@Injectable({
  providedIn: 'root'
})

export class CartService {
  getProducts(): Array<ProductModel> {
    return [
      new ProductModel('Product1', 'Description1', 123),
      new ProductModel('Product2', 'Description2', 123),
    ];
  }
}
