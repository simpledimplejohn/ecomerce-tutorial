import { FormArrayComponent } from './form-array/form-array.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: ProductListComponent},
  {path: "products/:productId", component: ProductDetailsComponent},
  {path: "cart", component: CartComponent},
  {path: "shipping", component: ShippingComponent},
  {path: "form-array", component: FormArrayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
