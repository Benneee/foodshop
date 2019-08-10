import { ShoppingCartItem } from './shopping-cart-item.model';

export class ShoppingCart {
  shoppingCartItemCount: number;

  constructor(public items: ShoppingCartItem[]) {}

  get totalItemsCount() {
    let count = 0;
    /**
     * So items here is an object and not an array
     * We now need to iterate through the items in the object,
     * using the product key to find the product we need its quantity.
     */
    for (let productId in this.items) count += this.items[productId].quantity;
    return count;
  }
}
