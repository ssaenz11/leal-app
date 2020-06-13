import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchV'
})
export class SearchVPipe implements PipeTransform {

  transform(values: any[], args: number[]): any {
    const arr = [];
    
    if ( args.length === 0 ) {
      return values;
    } else {
      for ( const valuev of values ) {
        if ( args.includes(valuev.value )) {
          arr.push(valuev);
        }
      }
      return arr;
    }
  }
}
