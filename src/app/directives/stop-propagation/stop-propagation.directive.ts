import { Directive, HostListener, ElementRef } from '@angular/core';
import { Element } from '@angular/compiler';

@Directive({
  selector: '[appStopPropagation]'
})
export class StopPropagationDirective {
  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event']) onTaoLao(event) {
    event.stopPropagation();
  }

}
