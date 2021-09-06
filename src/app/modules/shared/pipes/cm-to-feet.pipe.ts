import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cmToFeet'
})
export class CmToFeetPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return (value / 30.48).toFixed(2);
  }

}
