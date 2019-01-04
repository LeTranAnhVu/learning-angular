import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) { }
  @Input() format = 'uppercase';
  // if we just need one Input
  // we can do
  // @Input('appInputFormat')
  // in html <input [appInputFormat]="'lowercase'">
  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;
    if (this.format === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }


}
