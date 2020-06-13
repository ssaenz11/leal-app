import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchP'
})
export class SearchPPipe implements PipeTransform {

  transform(values: any[], args: number[]): any {
    const arr = [];
    
    if ( args.length === 0 ) {
      return values;
    } else {
      for ( const value of values ) {
        if ( args.includes(value.points )) {
          arr.push(value);
        }
      }
      return arr;
    }
  }

}
