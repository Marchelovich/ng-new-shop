import {ProductModel} from "../../product/models/product.model";
import {CartItemModel} from "./cart-item.model";

export class CartModel {
  private items: Array<CartItemModel> = [
    new CartItemModel(new ProductModel('Product1', 'Description1', 123)),
    new CartItemModel(new ProductModel('Product2', 'Description2', 123)),
  ];

  getItems(): Array<CartItemModel> {
    return this.items
  }

  addProduct(product: ProductModel, quantity: number = 1) {
    const pos = this.items.findIndex((item, index) => {
      return JSON.stringify(product) === JSON.stringify(item.getProduct());
    });
    if (pos >= 0) {
      this.items[pos].quantity++;
    } else {
      this.items.push(new CartItemModel(product, quantity));
    }
  }

  getTotalCost(): number {
    let sum = 0;
    this.items.forEach((element) => sum += element.getProduct().price * element.quantity);

    return sum;
  }

  getTotalQuantity(): number {
    let quantity = 0;
    this.items.forEach((element) => quantity += element.quantity);

    return quantity;
  }

  quantityIncrease(item: CartItemModel): void {
    this.changeQuantity(item, 1);
  }

  quantityDecrease(item: CartItemModel): void {
    this.changeQuantity(item, -1);
  }

  private changeQuantity(item: CartItemModel, delta: number) {
    const pos = this.items.indexOf(item);
    this.items[pos].quantity += delta;
    if (this.items[pos].quantity === 1) {
      this.deleteItem(this.items[pos]);
    }
  }

  deleteItem(item: CartItemModel): void {
    const pos = this.items.indexOf(item);
    this.items.splice(pos, 1);
  }

  clearCart(): void {
    this.items = [];
  }
}
