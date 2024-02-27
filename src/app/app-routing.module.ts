import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { SaleComponent } from './components/sale/sale.component';
import { NewArrivalComponent } from './components/new-arrival/new-arrival.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { Error404Component } from './components/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'E-Cart',
  },
  { path: 'home', component: HomeComponent, title: 'E-Cart' },
  { path: 'products', component: ProductsComponent, title: 'E-Cart Products' },
  { path: 'sale', component: SaleComponent, title: 'E-Cart Sale' },
  {
    path: 'new-arrival',
    component: NewArrivalComponent,
    title: 'E-Cart New Arrival',
  },
  { path: 'contact', component: ContactComponent, title: 'E-Cart Contact' },
  { path: 'services', component: ServicesComponent, title: 'E-Cart Services' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Error404Component, title: 'E-Cart Error404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
