import { Directive, HostListener, Input } from '@angular/core';
import {
  NG_VALUE_ACCESSOR, ControlValueAccessor
} from '@angular/forms';


// CPF: <input type="text" kzMask="999.999.999-99">
// CNPJ: <input type="text" kzMask="99.999.999/9999-99">
// CEP: <input type="text" kzMask="99999-999">

@Directive({
  selector: '[inputMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputCepDirective,
    multi: true
  }]
})
export class InputCepDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;

  @Input() inputMask: string;

  writeValue(value: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = (fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    let value = $event.target.value.replace(/\D/g, '');
    let pad = this.inputMask.replace(/\D/g, '').replace(/9/g, '_');
    let valorMask = value + pad.substring(0, pad.length - value.length);


    if ($event.keyCode === 8) {
      this.onChange(value);
      return;
    }

    if (value.length <= pad.length) {
      this.onChange(value);
    }

    let valorMaskPos = 0;
    value = '';
    for (let i = 0; i < this.inputMask.length; i++) {
      if (isNaN(+this.inputMask.charAt(i))) {
        value += this.inputMask.charAt(i);
      } else {
        value += valorMask[valorMaskPos++];
      }
    }

    if (value.indexOf('_') > -1) {
      value = value.substr(0, value.indexOf('_'));
    }

    $event.target.value = value;
  }

  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    if ($event.target.value.length === this.inputMask.length) {
      return;
    }
    this.onChange('');
    $event.target.value = '';
  }
};