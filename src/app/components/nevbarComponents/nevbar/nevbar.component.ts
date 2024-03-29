import { Component } from '@angular/core';
import { NevbarLink } from 'src/app/interfaces/nevbar-link';

@Component({
  selector: 'app-nevbar',
  templateUrl: './nevbar.component.html',
  styleUrls: ['./nevbar.component.css'],
})
export class NevbarComponent {
  newbarLinks!: Array<NevbarLink>;

  constructor() {
    this.newbarLinks = [
      { linkName: 'Home', linkAddress: '/home' },
      { linkName: 'Products', linkAddress: '/products' },
      { linkName: 'Sale', linkAddress: '/sale' },
      { linkName: 'New Arrival', linkAddress: '/new-arrival' },
      { linkName: 'Contact', linkAddress: '/contact' },
      { linkName: 'Our Services', linkAddress: '/our-services' },
    ];
  }
}
