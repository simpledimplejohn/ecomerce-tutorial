
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.CartService.getItems();
// makes a form builder group for the items
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private CartService: CartService,
    private formBuilder: FormBuilder
    ) { }

  onSubmit(): void {
    // process checkout data
    this.items = this.CartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }


  ngOnInit(): void {
  }

}
