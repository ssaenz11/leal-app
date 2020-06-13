import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(values: any[], args: string[]): any {
    const arr = [];
    args = args.map( arg => arg.toLowerCase() );

    if ( args.length === 0 ) {
      return values;
    } else {
      for ( const value of values ) {
        if ( args.includes(value.type.toLowerCase()) ) {
          arr.push(value);
        }
      }
      return arr;
    }
  }

}
