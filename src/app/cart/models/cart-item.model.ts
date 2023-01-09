import {ProductModel} from "../../product/models/product.model";

export class CartItemModel {
  constructor(private product: ProductModel, public quantity: number = 1) {
  }

  getProduct(): ProductModel {
    return this.product;
  }

  getQuantity(): number {
    return this.quantity;
  }
}
