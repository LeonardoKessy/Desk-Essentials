import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';

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
      stock: 200,
    },
    {
      name: 'Stapler',
      price: 10000,
      image: 'assets/img/products/stapler.jpg',
      type: 'Stationary',
      stock: 30,
    }
  ]
}
