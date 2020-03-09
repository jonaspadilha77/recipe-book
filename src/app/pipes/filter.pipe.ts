import { Pipe, PipeTransform, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, prop: string): any {
    if (value.length === 0 || !filterString || filterString === '') {
      return value;
    }

    const result = [];

    for (const item of value) {
      if (item[prop] && item[prop].toLowerCase().trim() === (filterString.toLowerCase().trim())) {
        result.push(item);
      }
    }

    return result;

  }

}
