import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'PriceNumber'
})

export class PriceNumberPipe implements PipeTransform {
    transform(value: number): string {
        return `$ ` + value;
    }
}

