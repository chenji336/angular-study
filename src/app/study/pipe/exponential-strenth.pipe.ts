import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrenth'
})
export class ExponentialStrenthPipe implements PipeTransform {

  transform(value: any, exponent: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

}
