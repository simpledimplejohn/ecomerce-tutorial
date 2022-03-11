import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../proudcts';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  // ActivatedRoute needs to be injected here
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  // takes in the current product, adds to the array using the service method
  addtoCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart');
  }

  ngOnInit(): void {

    // get the proudct id that was entered in the route, needs ActivatedRoute to get the snapshot
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // find  the product based on that route
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
