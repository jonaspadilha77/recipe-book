import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shorten'
})

export class ShortenPipe implements PipeTransform {
    transform(value: string, count: number) {
        if (value.length > count) {
            return value.substr(0, count) + '...';
        }

        return value;
    }
}
