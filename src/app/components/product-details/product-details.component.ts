import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input()
  showProductDetails?: boolean;
  @Input()
  productsDetailsToDisplay: Product;
  @Input()
  currentCurrency!: string;
  @Output()
  onCloseButtonClick: EventEmitter<boolean>;

  selectedCurrency: string;

  availableCurrency!: Array<String>;

  constructor() {
    this.productsDetailsToDisplay = {} as Product;
    this.currentCurrency = '';
    this.onCloseButtonClick = new EventEmitter<boolean>();
    this.selectedCurrency = 'USD';
    this.availableCurrency = ['USD', 'JPY', 'GBP', 'INR'];
  }

  closeProductDetails(): void {
    this.onCloseButtonClick.emit(false);
    // console.log(this.productsDetailsToDisplay);
  }
}
