import { Subscription } from 'rxjs';
import { ShoppingCart } from './../models/shopping-cart.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingCartService } from '../providers/shopping-cart.service';
import { OrderService } from '../order.service';
import { AuthService } from '../auth/auth.service';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  shipping = {};
  cart: ShoppingCart;
  cartSubscription: Subscription;
  userSubscription: Subscription;
  userId: string;
  constructor(
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService
  ) {}

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => (this.cart = cart));
    this.authService.user$.subscribe(user => (this.userId = user.uid));
  }

  placeOrder(shippingForm: NgForm) {
    let order = new Order(this.userId, shippingForm.value, this.cart);
    this.orderService.storeOrder(order);
    console.log(order);
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
