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
    let found = this._findItem(product.name);

    if (!found) {
      this._cart.push({product: product, amount: 1});
    } else {
      if (this._enoughStock(found)) {
        found.amount++;
      } else {
        return;
      }
    }
    this.cart.next(this._cart);
  }

  setAmount(name : String, amount : number) {
    let found = this._findItem(name);
    if (found && amount > 0) {
      if (this._enoughStock(found, amount)) {
        found.amount = amount;
      } else {
        found.amount = found.product.stock;
      }
      this.cart.next(this._cart);
    }
  }

  changeAmount(name : string, b : Boolean) {
    let found = this._findItem(name);
    
    if (!found) return;
    
    if (b) {
      if (found.amount < found.product.stock) found.amount++;
    } else {
      if (found.amount > 1) 
        found.amount--;
      else {
        this.removeItem(name);
        return;
      }
    }
    this.cart.next(this._cart);
  }

  removeItem(name: string) {
    let found = this._findItem(name);

    if (!found) return;

    this._cart.splice(this._cart.indexOf(found), 1);

    this.cart.next(this._cart);
  }

  private _enoughStock(item : CartItem, amount : number | null = null) : Boolean {
    amount = amount ? amount : item.amount;
    if (amount < item.product.stock) {
      return true;
    } 
    return false;
  }

  private _findItem(name : String) : CartItem | undefined {
    return this._cart.find((i) => i.product.name == name);
  }
}
