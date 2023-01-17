import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  @Input('appClick') color!: string;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }

  @HostListener('click')
  onClick(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background', this.color);
  }
}
