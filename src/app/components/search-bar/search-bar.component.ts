import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchText: string = 'NULL_NODATA';

  @Output()
  OnSearchButtonClick: EventEmitter<string> = new EventEmitter<string>();

  emitSearchText(): void {
    this.OnSearchButtonClick.emit(this.searchText);
    console.log(this.searchText);
  }
}
