import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { ShoppingCartService } from '../providers/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input() product: Product;
  // @Input() showActions = true;
  @Input() shoppingCart;
  constructor(private cartService: ShoppingCartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }
}
