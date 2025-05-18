import { Component, output } from '@angular/core';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

export class ProductListComponent {
  products: Product[] = [
    {
      name: 'Post-it pack',
      price: 2000,
      image: 'assets/img/products/postIts.jpg',
      type: 'Stationary',
      stock: 0,
    },
    {
      name: 'Stapler',
      price: 10000,
      image: 'assets/img/products/stapler.jpg',
      type: 'Stationary',
      stock: 30,
    },
    {
      name: 'Paperclip pack',
      price: 1200,
      image: 'assets/img/products/stapler.jpg',
      type: 'Stationary',
      stock: 150,
    },
  ];
}
