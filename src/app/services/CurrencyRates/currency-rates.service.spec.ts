import { TestBed } from '@angular/core/testing';

import { CurrencyRatesService } from './currency-rates.service';

describe('CurrencyRatesService', () => {
  let service: CurrencyRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
