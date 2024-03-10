import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyRatesService } from 'src/app/services/CurrencyRates/currency-rates.service';

@Pipe({
  name: 'convertToCurrency',
})
export class ConvertToCurrencyPipe implements PipeTransform {
  currencyRatesServiceResponce: any;
  constructor(private currencyRatesService: CurrencyRatesService) {}

  transform(value: number, ...args: any[]): number {
    const [baseCurrency, targetCurrency] = args;
    console.log('in pipe: ' + value);
    console.log('in pipe:: baseCurrency ' + baseCurrency);
    console.log('in pipe:: targetCurrency ' + targetCurrency);
    // code to make api call and convert to the respected currency then return the value
    this.currencyRatesService
      .getCurrencyRates(baseCurrency, targetCurrency)
      .subscribe((response) => {
        this.currencyRatesServiceResponce = response;
      });
    console.log(this.currencyRatesServiceResponce);
    return value;
  }
}
