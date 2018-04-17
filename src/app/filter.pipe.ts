import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Product[], searchText: string): any[] {
    if (items) {
      if (searchText) {
        searchText = searchText.toLowerCase();

        return items.filter(it => {
          return it.name.toLowerCase().includes(searchText);
        });
      } else {
        return items;
      }
    }

    return [];
  }

}
