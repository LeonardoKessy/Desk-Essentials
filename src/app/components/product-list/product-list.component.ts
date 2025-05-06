import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = [
    {
      name: "Post-it pack",
      price: "$2000",
      image: "assets/img/products/postIts.jpg"
    },
    {
      name: "Stapler",
      price: "$10000",
      image: "assets/img/products/stapler.jpg"
    }
  ]
}
