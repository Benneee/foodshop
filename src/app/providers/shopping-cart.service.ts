import { ShoppingCart } from './../models/shopping-cart.model';
import {
  AngularFireDatabase,
  FirebaseObjectObservable
} from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  // To get the details of a cart from Frebase
  async getCart(): Promise<Observable<ShoppingCart>> {
    // Adding async and await to this method makes the cartId move from a type of Promise<any> to just any!
    let cartId = await this.getOrCreateCartId();
    return this.db
      .object('/shopping-carts/' + cartId)
      .map(x => new ShoppingCart(x['items']));
  }

  private async getOrCreateCartId(): Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addToCart(product: Product) {
    this.updateCartQuantity(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateCartQuantity(product, -1);
  }

  private async updateCartQuantity(product: Product, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.$key);
    item$.take(1).subscribe(item => {
      item$.update({
        product: product,
        quantity: (item['quantity'] || 0) + change
      });
    });
  }
}
