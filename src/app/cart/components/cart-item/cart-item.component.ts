import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartItemModel} from "../../models/cart-item.model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item!: CartItemModel;

  @Output() quantityIncrease: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>;
  @Output() quantityDecrease: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>;
  @Output() deleteItem: EventEmitter<CartItemModel> = new EventEmitter<CartItemModel>;

  onQuantityIncrease(): void {
    this.quantityIncrease.emit(this.item);
  }

  onQuantityDecrease(): void {
    this.quantityDecrease.emit(this.item);
  }

  onDeleteItem(): void {
    this.deleteItem.emit(this.item);
  }
}
