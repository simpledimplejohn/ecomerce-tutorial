import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../proudcts';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  // creates a child
  @Input() product!: Product;
  // triggered when clicked, method in product-list.component
  @Output() notify = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
