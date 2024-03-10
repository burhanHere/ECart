import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input()
  product: Product;
  @Input()
  currentCurrency: string;
  @Output()
  onProductCardClick: EventEmitter<Product>;

  constructor() {
    this.product = {} as Product;
    this.currentCurrency = '';
    this.onProductCardClick = new EventEmitter<Product>();
  }

  emitproductData(): void {
    this.onProductCardClick.emit(this.product);
  }
}
