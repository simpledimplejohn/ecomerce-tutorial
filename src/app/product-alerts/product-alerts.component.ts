import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../proudcts';

// Ask lewis about Input, Output, EventEmitter

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  // creates a child
  @Input() product!: Product;
  // triggered when clicked, method in product-list.component
  @Output() notify = new EventEmitter();



}
