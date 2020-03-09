import {
  Directive,
  HostBinding,
  Input,
  Renderer2,
  ElementRef,
  AfterViewChecked,
  AfterViewInit
} from '@angular/core';

@Directive({
  selector: '[appIngredientType]'
})
export class IngredientTypeDirective implements AfterViewChecked {

  @Input('appIngredientType') type: string;

  constructor(private renderer: Renderer2, public hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'ingredient-type');
  }


  ngAfterViewChecked() {
    const addClass = 'ingredient-type-' + this.type.toString().toLowerCase();
    this.renderer.addClass(this.hostElement.nativeElement, addClass);
  }



}
