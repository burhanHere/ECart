import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input()
  product: Product = {} as Product;
  @Output()
  onProductCardClick: EventEmitter<Product> = new EventEmitter<Product>();

  emitproductData(): void {
    this.onProductCardClick.emit(this.product);
  }
}
