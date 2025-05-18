import { Injectable } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductCartService {
  private _cart : CartItem[] = []
  cart : BehaviorSubject<CartItem[]>;

  constructor() { 
    this.cart = new BehaviorSubject(this._cart);
  }

  addToCart(product : Product) {
    let found : CartItem | undefined = this._cart.find((i) => i.product.name == product.name);

    if (found) {
      if (found.amount >= found.product.stock) {
        console.log("No more stock of " + found.product.name);
        return;
      }
      found.amount++;
    } else {
      this._cart.push({product: product, amount: 1});
    }
    this.cart.next(this._cart);
  }
}
