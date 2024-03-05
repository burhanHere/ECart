import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsComponent } from './components/products/products.component';
import { TopHeaderComponent } from './components/nevbarComponents/top-header/top-header.component';
import { TopMenuComponent } from './components/nevbarComponents/top-menu/top-menu.component';
import { NevbarComponent } from './components/nevbarComponents/nevbar/nevbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { Error404Component } from './components/error404/error404.component';
import { ServicesComponent } from './components/services/services.component';
import { NewArrivalComponent } from './components/new-arrival/new-arrival.component';
import { SaleComponent } from './components/sale/sale.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { FeacheredBrandCardComponent } from './components/feachered-brand-card/feachered-brand-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    TopHeaderComponent,
    TopMenuComponent,
    NevbarComponent,
    HomeComponent,
    ContactComponent,
    SearchBarComponent,
    Error404Component,
    ServicesComponent,
    NewArrivalComponent,
    SaleComponent,
    ProductCardComponent,
    FilterComponent,
    ProductDetailsComponent,
    FeacheredBrandCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
