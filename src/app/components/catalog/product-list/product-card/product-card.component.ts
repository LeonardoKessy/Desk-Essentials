import { Component, input, output } from '@angular/core';
import { Product } from '../../../../interfaces/product';
import { ProductCartService } from '../../../../services/product-cart.service';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  constructor (private CartService : ProductCartService) {}

  product = input.required<Product>();

  addToCart(product: Product): void {
    this.CartService.addToCart(product)
  }
}
