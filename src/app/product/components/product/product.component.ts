import {Component, EventEmitter, Input, KeyValueDiffer, KeyValueDiffers, Output} from '@angular/core';
import { type ProductModel } from "../../models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: ProductModel;
  @Output() addToCart : EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  private differ!: KeyValueDiffer<any, any>;

  onAddToCart() {
    this.addToCart.emit(this.product);
  }

  constructor(private differs: KeyValueDiffers) {}

  ngOnInit(): void {
    this.differ = this.differs.find(this.product).create();
  }
}
