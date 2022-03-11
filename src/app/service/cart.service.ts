import { Injectable } from '@angular/core';
import { Product } from '../proudcts';
import { HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // create temporary items array to hold products
  items: Product[] = [];

  constructor(
    private httpClient : HttpClient
  ) {}

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
// fake http request from the assets folder
  getShippingPrices() {
    return this.httpClient.get<{type: string, price: number}[]>
    ('/assets/shipping.json')
  }

}
