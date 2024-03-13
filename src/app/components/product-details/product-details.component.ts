import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
} from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CurrencyRatesService } from 'src/app/services/CurrencyRates/currency-rates.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnChanges {
  @Input()
  showProductDetails?: boolean;
  @Input()
  productsDetailsToDisplay: Product;
  @Input()
  currentCurrency!: string;
  @Output()
  onCloseButtonClick: EventEmitter<boolean>;

  productsDetailsToDisplay_Price: number;
  productsDetailsToDisplay_DiscountPrice: number;
  selectedCurrency: string;
  tempSelectedCurrency: string;

  availableCurrency: Array<String>;

  constructor(private currencyRatesService: CurrencyRatesService) {
    this.productsDetailsToDisplay = {} as Product;
    this.productsDetailsToDisplay_Price = 0;
    this.productsDetailsToDisplay_DiscountPrice = 0;
    this.currentCurrency = '';
    this.onCloseButtonClick = new EventEmitter<boolean>();
    this.selectedCurrency = 'USD';
    this.tempSelectedCurrency = 'USD';
    this.availableCurrency = ['USD', 'JPY', 'GBP', 'INR'];
  }

  ngOnChanges() {
    this.productsDetailsToDisplay_Price = this.productsDetailsToDisplay.price;
    this.productsDetailsToDisplay_DiscountPrice = this.productsDetailsToDisplay
      .discountPrice
      ? this.productsDetailsToDisplay.discountPrice
      : 0;
  }

  updateCurrency(value: string) {
    this.currentCurrency = this.selectedCurrency;
    this.selectedCurrency = value;
    let serviceResponse: any;
    if (this.currentCurrency != this.selectedCurrency) {
      // code to make api call and convert to the respected currency then return the value
      this.currencyRatesService
        .getCurrencyRates(this.currentCurrency, this.selectedCurrency)
        .then((responce) => {
          serviceResponse = responce;
          this.productsDetailsToDisplay_Price =
            this.productsDetailsToDisplay_Price *
            Number(serviceResponse.body.data[this.selectedCurrency]);
          this.productsDetailsToDisplay_DiscountPrice =
            this.productsDetailsToDisplay_DiscountPrice *
            Number(serviceResponse.body.data[this.selectedCurrency]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  closeProductDetails(): void {
    this.onCloseButtonClick.emit(false);
  }
}
