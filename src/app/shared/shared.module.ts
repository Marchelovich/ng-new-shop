import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FirstComponentComponent} from "./components/first-component/first-component.component";
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    FirstComponentComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    FirstComponentComponent,
    HighlightDirective,
  ],
  providers: [],
  bootstrap: []
})

export class SharedModule { }
