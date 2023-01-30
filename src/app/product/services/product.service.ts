import { Injectable } from '@angular/core';
import { ProductModel } from "../models/product.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  getProducts(): Observable<any> {
    return of([
      new ProductModel('Product1', 'Description1', 123),
      new ProductModel('Product2', 'Description2', 123),
      new ProductModel('Product3', 'Description3', 123, false),
    ]);
  }
  constructor() { }
}
