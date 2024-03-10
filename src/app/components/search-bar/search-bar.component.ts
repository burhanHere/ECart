import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchText!: string;

  @Output()
  OnSearchButtonClick: EventEmitter<string>;

  constructor() {
    this.searchText == 'NULL_NODATA';
    this.OnSearchButtonClick = new EventEmitter<string>();
  }

  emitSearchText(): void {
    this.OnSearchButtonClick.emit(this.searchText);
    console.log(this.searchText);
  }
}
