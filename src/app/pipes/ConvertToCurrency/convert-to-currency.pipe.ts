import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToCurrency',
})
export class ConvertToCurrencyPipe implements PipeTransform {
  transform(value: Number, ...args: string[]): Number {
    if (args.length > 0) {
      const [from, to] = args;
    }
    return value;
  }
}
