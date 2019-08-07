import { ShoppingCartService } from './../providers/shopping-cart.service';
import { Product } from './../models/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() showActions = true;
  @Input() shoppingCart;
  constructor(private cartService: ShoppingCartService) {}

  ngOnInit() {}
  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }

  getQuantity() {
    if (!this.shoppingCart) return 0;

    let item = this.shoppingCart.items[this.product.$key];
    return item ? item.quantity : 0;
  }
}
