import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting',
  // pure: false
})
export class SortingPipe implements PipeTransform {

  transform(mobs: Array<string>, ch: string): any {
    if (ch) {
      let sorted = new Array<string>()
      mobs.forEach(mb => {
        if (ch === mb.charAt(0)) {
          sorted.push(mb)
        }
      })
      return sorted;
    }
    return mobs
  }

}
