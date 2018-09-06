import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnInit{

  @Input()
  appUnless : boolean

  constructor(
    private tmRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
    console.log(vcRef)
  }

  ngOnInit() {
    if(!this.appUnless) {
      this.vcRef.createEmbeddedView(this.tmRef)
    }
    else {
      this.vcRef.clear()
    }
  }
}
