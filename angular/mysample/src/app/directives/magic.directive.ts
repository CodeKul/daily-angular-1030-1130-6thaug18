import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMagic]'
})
export class MagicDirective {

  @Input('appMagic')
  @HostBinding('style.background')
  hstClr: string

  constructor() { }

  @HostListener('mouseenter')
  whenIn() {
    this.changeColor()
  }

  @HostListener('mouseleave')
  whenOut() {
    this.changeColor()
  }
  changeColor() {
    let red = Math.round(Math.random() * 256)
    let green = Math.round(Math.random() * 256)
    let blue = Math.round(Math.random() * 256)
    this.hstClr = `rgb(${red}, ${green}, ${blue})`
    console.log(this.hstClr)
  }
}
