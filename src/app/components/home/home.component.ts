import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductDataService } from 'src/app/services/ProductData/product-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //used a custome sercice to get the product details list
  allProducts: Array<Product>;
  //currency type is specified in this variable
  currencyType: string;
  // updating the product count according to each filter
  allProductsCount: number;
  inStockProductsCount: number;
  outOfStockProductsCount: number;
  selectedFilter: string;
  searchText: string; // NULL_NODATA is because the emmiter does not emits '' an empty string, so this NULL_NODATA is an intimation that no string was meeited to be searched for the products. so when NULL_NODATA will be emmited all the products will be displayed from the allProducts.
  productToDisplay: Array<Product>; // this will contain he products which should be displayed according to the search results and sleected filetrs
  showProductDetails: boolean;
  selectedProductForDetails: Product;

  constructor(productDataService: ProductDataService) {
    this.allProducts = productDataService.getProductDataList();
    this.currencyType = 'USD';
    this.allProductsCount = this.allProducts.length;
    this.inStockProductsCount = this.allProducts.filter(
      (p) => p.is_in_inventory === true
    ).length;
    this.outOfStockProductsCount = this.allProducts.filter(
      (p) => p.is_in_inventory === false
    ).length;
    this.selectedFilter = 'all';
    this.searchText = 'NULL_NODATA';
    this.productToDisplay = this.allProducts;
    this.showProductDetails = false;
    this.selectedProductForDetails = {} as Product;
  }

  // filter and returns Array<Product> the products given as peremeter according to the selectedFilter
  filterListingBySelectedFilter(
    productsToFilter: Array<Product>
  ): Array<Product> {
    let filteredProducts: Array<Product> = new Array<Product>();
    if (this.selectedFilter === 'all') {
      filteredProducts = productsToFilter;
      // all products willl be listed
    } else if (this.selectedFilter === 'inStock') {
      filteredProducts = productsToFilter.filter(
        (p) => p.is_in_inventory === true
      );
      // only the products which are in inventory will be listed
    } else if (this.selectedFilter === 'outOfStock') {
      filteredProducts = productsToFilter.filter(
        (p) => p.is_in_inventory === false
      );
      // only the products which are not in inventory will be listed
    }
    return filteredProducts;
  }

  // filter and returns Array<Product> the products given as peremeter according to the SearchText
  filterListingBySearchText(productsToFilter: Array<Product>): Array<Product> {
    let filteredProducts: Array<Product> = new Array<Product>();
    if (this.searchText) {
      filteredProducts = productsToFilter.filter(
        (p) =>
          p.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
          p.brand.toLowerCase() === this.searchText.toLowerCase()
      );
    }
    return filteredProducts;
  }

  updateCounts(productsToCount: Array<Product>): void {
    // updating the product count according to each filter
    this.allProductsCount = productsToCount.length;
    this.inStockProductsCount = productsToCount.filter(
      (p) => p.is_in_inventory === true
    ).length;
    this.outOfStockProductsCount = productsToCount.filter(
      (p) => p.is_in_inventory === false
    ).length;
  }

  // this fucntion will be exicuted exicuted when ever a filter wil be changes or a searchText will be recieved and will update the productsToDisplay:Array<Product>
  updateProductToDisplay(): void {
    if (this.searchText === 'NULL_NODATA') {
      // if no searchText then display all the products and set the filter to all
      this.productToDisplay = this.allProducts; // get all the products
      this.updateCounts(this.productToDisplay); // now updates the count of the all,inskock and outofstock products is displayed besides each filter
      this.productToDisplay = this.filterListingBySelectedFilter(
        this.productToDisplay
      ); // updates the product according to the selected filter form the all the products if there is no search text
    } else {
      // if there is some searchText then filter the products according to the searchText then by selectedFilter
      this.productToDisplay = this.allProducts; // get all the products
      this.productToDisplay = this.filterListingBySearchText(this.allProducts); // filter them by product name and brand name
      this.updateCounts(this.productToDisplay); // now updates the count of the all,inskock and outofstock products is displayed besides each filter
      this.productToDisplay = this.filterListingBySelectedFilter(
        this.productToDisplay
      ); // updates the product according to the selected filter form the products filters according to the given search text
    }
  }

  setSelectedProductForDetails(productDetailsToShow: Product): void {
    this.selectedProductForDetails = productDetailsToShow;
  }
}
