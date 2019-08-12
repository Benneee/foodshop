import { Product } from './product.model';

export class ShoppingCartItem {
  /**
   *
   * @param init
   * Partial is a generic class in TypeScript
   * init can be an object that looks like a ShoppingCartItem
   * This can enable us use this class somewhere else
   */
  constructor(init?: Partial<ShoppingCartItem>) {
    Object.assign(this, init);
  }
  $key: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;

  get totalPrice() {
    return this.price * this.quantity;
  }
}
