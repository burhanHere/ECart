import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyRatesService {
  private ApiUrl: string;
  constructor(private client: HttpClient) {
    this.ApiUrl = '';
  }

  // getCurrencyRates(
  //   baseCurrency: string,
  //   targetCurrency: string
  // ): Observable<HttpResponse<any>> {
  //   this.ApiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_9q7JGvcG5zgMyWEWdwoiQIvEc7M7Su26HebWSbBP&currencies=${targetCurrency}&base_currency=${baseCurrency}`;
  //   console.log('in service:: this.ApiUrl:' + this.ApiUrl);
  //   const response: any = this.client.get(this.ApiUrl, { observe: 'response' });
  //   return response;
  // }

  async getCurrencyRates(baseCurrency: string, targetCurrency: string) {
    //  Promise<HttpResponse<Object>>;
    const url = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_9q7JGvcG5zgMyWEWdwoiQIvEc7M7Su26HebWSbBP&currencies=${targetCurrency}&base_currency=${baseCurrency}`;

    try {
      const response = await this.client
        .get(url, { observe: 'response' })
        .toPromise();
      return response;
    } catch (error) {
      return Object({ data: error });
    }
  }
}
