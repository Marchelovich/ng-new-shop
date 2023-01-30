import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FirstComponentComponent} from "./components/first-component/first-component.component";
import { HighlightDirective } from './directives/highlight.directive';
import { ClickDirective } from './directives/click.directive';
import { OrderByPipePipe } from './pipes/order-by-pipe.pipe';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    FirstComponentComponent,
    HighlightDirective,
    ClickDirective,
    OrderByPipePipe,
  ],
  imports: [
    BrowserModule,
  ],
    exports: [
        FirstComponentComponent,
        HighlightDirective,
        ClickDirective,
        OrderByPipePipe,
        CommonModule
    ],
  providers: [],
  bootstrap: []
})

export class SharedModule { }
