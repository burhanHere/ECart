import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  selectedFilter = 'all';
  @Output()
  OnFilterSelect: EventEmitter<string> = new EventEmitter<string>();

  emitSelectedFilter(): void {
    this.OnFilterSelect.emit(this.selectedFilter);
    console.log(this.selectedFilter);
  }
}
