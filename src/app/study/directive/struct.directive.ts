import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appStruct]'
})
export class StructDirective {

  private hasShow = false;
  @Input() set appStruct(condition: boolean) {
    if (!condition && !this.hasShow) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasShow = true;
    } else if (condition && this.hasShow) {
      this.viewContainerRef.clear();
      this.hasShow = false;
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

}
