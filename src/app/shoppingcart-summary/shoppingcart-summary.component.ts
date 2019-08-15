import { ShoppingCart } from 'shared/models/shopping-cart.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shoppingcart-summary',
  templateUrl: './shoppingcart-summary.component.html',
  styleUrls: ['./shoppingcart-summary.component.css']
})
export class ShoppingcartSummaryComponent {
  @Input() cart: ShoppingCart;
}
