import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: String  = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2; //disabled TSLint configurations for this project
  showImage: boolean = false;
  listFilter: String = 'cart';
  products: any[] = [
  {
    'productID': 101,
    'productName': 'Omega Milk',
    'productCode': 'OM-123',
    'releaseDate': 'Nov 19, 2018',
    'description': '4 Gallon',
    'price': '3.99',
    'starRating': '4.2',
    'imageURL': 'https://images-na.ssl-images-amazon.com/images/I/71S6TPzuNQL._SY355_.jpg'
    },
    {
    'productID': 102,
    'productName': 'BellVita',
    'productCode': 'BV-123',
    'releaseDate': 'Mar 22, 2018',
    'description': '6 pieces',
    'price': '3.99',
    'starRating': '3.9',
    'imageURL': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    }
  ];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  constructor() { }

  ngOnInit() {
  }

}
