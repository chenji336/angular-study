import { Directive, Input, HostBinding, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttribute]',
})
export class AttributeDirective {
  @Input('appAttribute') attributeColor;
  @Input() defaultColor;
  constructor(
    private el: ElementRef
  ) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hightlight(this.attributeColor || this.defaultColor);
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.hightlight(null);
  }

  hightlight(color) {
    console.log('color:', color)
    this.el.nativeElement.style.backgroundColor = color;
  }

}
