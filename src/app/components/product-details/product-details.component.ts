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
  productsDetailsToDisplay: Product = {} as Product;
  @Output()
  onCloseButtonClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeProductDetails(): void {
    this.onCloseButtonClick.emit(false);
    console.log(this.productsDetailsToDisplay);
  }
}
