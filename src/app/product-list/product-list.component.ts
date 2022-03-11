import { Component } from '@angular/core';
import { products } from '../proudcts';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  // accessing the model
  products = products;

  share() {
    window.alert('The product has been shared!')
  }

}
