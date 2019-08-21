import { ShoppingCart } from 'shared/models/shopping-cart.model';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order } from 'shared/models/order.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userSubscription: Subscription;
  userId: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(
      user => (this.userId = user.uid)
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    // $key is used when you read a node off/from firebase
    // key is used when you store something in firebase, e.g, we stored the user's ID...
    this.toastr.success('Order placed successfully', 'Success');
    this.router.navigate(['/order-success', result.key]);
  }
}
