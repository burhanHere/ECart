import { Component, EventEmitter, Input, Output } from '@angular/core';
import { every } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input()
  allProductsCount!: number;
  @Input()
  inStockProductsCount!: number;
  @Input()
  outOfStockProductsCount!: number;
  @Input()
  selectedFilter!: string;
  @Output()
  OnFilterSelect!: EventEmitter<string>;

  constructor() {
    this.selectedFilter = 'all';
    this.OnFilterSelect = new EventEmitter<string>();
  }

  emitSelectedFilter(): void {
    this.OnFilterSelect.emit(this.selectedFilter);
  }
}
