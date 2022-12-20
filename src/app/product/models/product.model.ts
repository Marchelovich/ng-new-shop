export class ProductModel {
  constructor (
    public name: string,
    public description: string,
    public price: number  = 0,
    public isAvailable: boolean = true
  ) {}
}
