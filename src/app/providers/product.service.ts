import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  create(product) {
    this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products');
  }

  getSingleProduct(productId) {
    return this.db.object('/product' + productId)
   }
}
