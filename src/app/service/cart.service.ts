import { Injectable } from '@angular/core';
import { Product } from '../proudcts';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // create temporary items array to hold products
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product)
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
