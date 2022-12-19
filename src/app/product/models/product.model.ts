export class ProductModel {
  name: string = "Component name";
  description: string = "Component description";
  price: number = 0;
  isAvailable: boolean = true;

  constructor (name: string, description: string, price: number, isAvailable: boolean = true) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.isAvailable = isAvailable;
  }
}
