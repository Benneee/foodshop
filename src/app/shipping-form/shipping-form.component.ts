import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../models/order.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ShoppingCartService } from '../providers/shopping-cart.service';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { ShoppingCart } from '../models/shopping-cart.model';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  shipping = {};
  userSubscription: Subscription;
  userId: string;
  @Input() cart: ShoppingCart;
  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router
  ) {}
  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(
      user => (this.userId = user.uid)
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async placeOrder(shippingForm: NgForm) {
    let order = new Order(this.userId, shippingForm.value, this.cart);
    let result = await this.orderService.placeOrder(order);
    console.log(order);
    // $key is used when you read a node off/from firebase
    // key is used when you store something in firebase, e.g, we stored the user's ID...
    this.router.navigate(['/order-success', result.key]);
  }
}
