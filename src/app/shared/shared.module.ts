import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FirstComponentComponent} from "./components/first-component/first-component.component";
import { HighlightDirective } from './directives/highlight.directive';
import { ClickDirective } from './directives/click.directive';

@NgModule({
  declarations: [
    FirstComponentComponent,
    HighlightDirective,
    ClickDirective,
  ],
  imports: [
    BrowserModule,
  ],
    exports: [
        FirstComponentComponent,
        HighlightDirective,
        ClickDirective,
    ],
  providers: [],
  bootstrap: []
})

export class SharedModule { }
