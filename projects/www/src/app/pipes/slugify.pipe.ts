import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugify',
  standalone: false
})
export class SlugifyPipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase().replace(/ /g, '-');
  }

}
