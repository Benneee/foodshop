import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import 'rxjs/add/operator/take';
@Injectable()
export class ShoppingCartService {
  constructor(private db: AngularFireDatabase) {}

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  // To get the details of a cart from Frebase
  private getCart(cartId: string) {
    return this.db.object('/shopping-carts/' + cartId);
  }

  private async getOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');
    if (!cartId) return cartId;

    let result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  // async addToCart(product: Product) {
  //   let cartId = await this.getOrCreateCartId();
  //   // We need to get a reference to the product in the shopping cart from Firebase
  //   let item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.$key);
  //   item$.take(1).subscribe(item => {
  //     // A method called "exists" is present in the objects we get from Firebase
  //     if (item.$exists()) {
  //       item$.update({quantity: item.quantity + 1})
  //     }
  //   })
  // }
}
