import { Component } from '@angular/core';
import { ProductCartService } from '../../../services/product-cart.service';
import { CartItem } from '../../../interfaces/cart-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-sidebar',
  standalone: false,
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.scss'
})
export class CartSidebarComponent {
  cart$ : Observable<CartItem[]>;

  constructor (private CartService : ProductCartService) {
    this.cart$ = CartService.cart.asObservable();
  }
  
  setAmount(e : Event , name : String) {
    let amount : number | typeof NaN = parseInt((e.target as HTMLInputElement).value);

    if (amount) this.CartService.setAmount(name, amount);
  }

  changeAmount(name : string, b : Boolean) {
    this.CartService.changeAmount(name, b);
  }

  deleteItem(name : string) {
    this.CartService.removeItem(name);
  }
}
