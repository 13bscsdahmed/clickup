import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to run ngfor loop over number instead of array
 */
@Pipe({
  name: 'numberLoop'
})
export class NumberLoopPipe implements PipeTransform {

  transform(value: number): number[] {
    const res = [];
    for (let i = 0; i < value; i++) {
      res.push(i + 1);
    }
    return res;
  }

}
