import {Component} from '@angular/core';
import {CategoryEnum} from "./CategoryEnum";

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})


export class FirstComponentComponent {
  name: string = "Component name";
  description: string = "Component description";
  price: number = 0;
  categories: Array<CategoryEnum> = [ CategoryEnum.Product, CategoryEnum.Service ];
  isAvailable: boolean = true;
}
