import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToCurrency',
})
export class ConvertToCurrencyPipe implements PipeTransform {
  transform(value: number, ...args: any[]): number {
    const [from, to] = args;
    console.log(value);
    console.log(from);
    console.log(to);
    // code to make api call and convert to the respected currency then return the value
    return value;
  }
}
