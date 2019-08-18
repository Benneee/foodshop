import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingcartSummaryComponent } from './components/shoppingcart-summary/shoppingcart-summary.component';
import { ShoppingRoutingModule } from './shopping-routing.module';

@NgModule({
  declarations: [
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ShoppingcartSummaryComponent,
    ShippingFormComponent,
    ProductsComponent,
    ProductFilterComponent,
    ShoppingCartComponent
  ],
  imports: [CommonModule, FormsModule, SharedModule, ShoppingRoutingModule]
})
export class ShoppingModule {}
