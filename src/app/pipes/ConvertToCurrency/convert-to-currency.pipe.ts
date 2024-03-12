import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyRatesService } from 'src/app/services/CurrencyRates/currency-rates.service';

@Pipe({
  name: 'convertToCurrency',
})
export class ConvertToCurrencyPipe implements PipeTransform {
  serviceResponse: any;
  constructor(private currencyRatesService: CurrencyRatesService) {}

  transform(value: number, ...args: any[]): number {
    const [baseCurrency, targetCurrency] = args;
    if (baseCurrency != targetCurrency) {
      // code to make api call and convert to the respected currency then return the value
      this.currencyRatesService
        .getCurrencyRates(baseCurrency, targetCurrency)
        .then((responce) => {
          this.serviceResponse = responce;
          console.log(this.serviceResponse);
          console.log(this.serviceResponse.body.data[targetCurrency]);
          value *= this.serviceResponse.body.data[targetCurrency];
          console.log(value);
          return value;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return value;
  }
}
