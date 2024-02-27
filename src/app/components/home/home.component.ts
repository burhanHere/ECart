import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allProducts: Array<Product> = [
    {
      id: 33,
      name: 'SK80-Low',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'Vans',
      gender: 'MEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9],
      color: ['White', 'Blue', 'Black', 'Red'],
      price: 60,
      discountPrice: 25,
      is_in_inventory: true,
      items_left: 3,
      imageURL: 'https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$',
      slug: 'sk80-low',
    },
    {
      id: 34,
      name: 'Michael Feburary SK8-Hi',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      brand: 'Vans',
      gender: 'MEN',
      category: 'CASUAL',
      size: [6, 7, 8, 9, 10, 11, 12],
      color: ['White', 'Blue', 'Black', 'Brown', 'Red'],
      price: 72,
      is_in_inventory: true,
      items_left: 3,
      imageURL: 'https://images.vans.com/is/image/Vans/MV122M-HERO?$583x583$',
      slug: 'michael-feburary-sk8-hi',
    },
  ];
  // updating the product count according to each filter
  allProductsCount: number = this.allProducts.length;
  inStockProductsCount: number = this.allProducts.filter(
    (p) => p.is_in_inventory === true
  ).length;
  outOfStockProductsCount: number = this.allProducts.filter(
    (p) => p.is_in_inventory === false
  ).length;

  selectedFilter: string = 'all';
  searchText: string = 'NULL_NODATA'; // NULL_NODATA is because the emmiter does not emits '' an empty string, so this NULL_NODATA is an intimation that no string was meeited to be searched for the products. so when NULL_NODATA will be emmited all the products will be displayed from the allProducts.
  productToDisplay: Array<Product> = this.allProducts; // this will contain he products which should be displayed according to the search results and sleected filetrs
  showProductDetails: boolean = false;
  selectedProductForDetails: Product = {} as Product;

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
