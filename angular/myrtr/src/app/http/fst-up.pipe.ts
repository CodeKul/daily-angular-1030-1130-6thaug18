import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fstUp'
})
export class FstUpPipe implements PipeTransform {
  transform(value: string, args?: number): any {
    return value.charAt(args).toUpperCase() + value.substr(args + 1);
  }
}
