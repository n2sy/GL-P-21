import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]',
})
export class CustomDirDirective {
  @HostBinding('style.backgroundColor') bgColor = 'white';
  @HostBinding('style.color') cl = 'black';

  constructor() {}

  @HostListener('mouseenter') mouseeneter() {
    this.bgColor = 'grey';
    this.cl = 'white';
  }
  @HostListener('mouseleave') mouseleave() {
    this.bgColor = 'white';
    this.cl = 'black';
  }
}
