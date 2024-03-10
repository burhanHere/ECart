import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ProductsComponent } from './components/products/products.component';
import { TopHeaderComponent } from './components/nevbarComponents/top-header/top-header.component';
import { TopMenuComponent } from './components/nevbarComponents/top-menu/top-menu.component';
import { NevbarComponent } from './components/nevbarComponents/nevbar/nevbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { Error404Component } from './components/error404/error404.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { NewArrivalComponent } from './components/new-arrival/new-arrival.component';
import { SaleComponent } from './components/sale/sale.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { FeaturedBrandCardComponent } from './components/featured-brand-card/featured-brand-card.component';
import { ConvertToCurrencyPipe } from './pipes/ConvertToCurrency/convert-to-currency.pipe';
import { ProductDataService } from './services/ProductData/product-data.service';
import { CurrencyRatesService } from './services/CurrencyRates/currency-rates.service';

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
    OurServicesComponent,
    NewArrivalComponent,
    SaleComponent,
    ProductCardComponent,
    FilterComponent,
    ProductDetailsComponent,
    FeaturedBrandCardComponent,
    ConvertToCurrencyPipe,
    OurServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProductDataService, CurrencyRatesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
