import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.border') border!: string;

  @HostListener('mouseenter')
  onMouseenter() {
    this.border = 'solid';
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.border = '';
  }

}
