import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  createProduct(product) {
    this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products');
  }

  getSingleProduct(productId) {
    return this.db.object('/products/' + productId);
  }

  updateProduct(productId, product) {
    /**
     * Why can't we just access the productId from the product?
     * If the product we give to this method contains an id property, we will get an error at runtime when the product is passed to the update method.
     * Firebase does not like when you pass an object to the method that has an ID property or $key property because by definition, id / key should not and cannot be changed
     */
    return this.db.object('/products/' + productId).update(product);
  }

  deleteProduct(productId) {
    return this.db.object('/products/' + productId).remove();
  }
}
