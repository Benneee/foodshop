import { OrderService } from './../order.service';
import { Component } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { AuthService } from 'shared/services/auth.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$;

  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) {
    this.orders$ = authService.user$.switchMap(u =>
      orderService.getOrdersByUser(u.uid)
    );
  }
}
