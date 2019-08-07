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
  constructor(private cartService: ShoppingCartService) {}

  ngOnInit() {}
  addToCart(product: Product) {
    let cartId = localStorage.getItem('cartId');
  }
}
