import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, observeOn } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyRatesService {
  constructor(private client: HttpClient) {}

  private baseApiUrl: string =
    'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_9q7JGvcG5zgMyWEWdwoiQIvEc7M7Su26HebWSbBP&';

  getCurrencyRates(
    baseCurrency: string,
    targetCurrency: string
  ): Observable<HttpResponse<any>> {
    let requestedCurrecy: string = `currencies=${targetCurrency}&base_currency=${baseCurrency}`;
    let requestApiURL: string = this.baseApiUrl + requestedCurrecy;
    console.log(requestApiURL);
    return this.client.get(requestApiURL, { observe: 'response' });
  }
}
