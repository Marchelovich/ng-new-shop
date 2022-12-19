import {ProductModel} from "../../product/models/product.model";

export class CartModel {
  private products: Array<ProductModel> = [
    new ProductModel('Product1', 'Description1', 123),
    new ProductModel('Product2', 'Description2', 123),
  ];

  getProducts() {
    return this.products
  }

  addProduct(product: ProductModel) {
    this.products.push(product);
  }
}
