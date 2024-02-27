import { Component } from '@angular/core';

@Component({
  selector: 'app-nevbar',
  templateUrl: './nevbar.component.html',
  styleUrls: ['./nevbar.component.css'],
})
export class NevbarComponent {
  newbarLinks = [
    { linkName: 'Home', linkAddress: '/home' },
    { linkName: 'Products', linkAddress: '/products' },
    { linkName: 'Sale', linkAddress: '/sale' },
    { linkName: 'New Arrival', linkAddress: '/new-arrival' },
    { linkName: 'Contact', linkAddress: '/contact' },
    { linkName: 'Services', linkAddress: '/services' },
  ];
}
