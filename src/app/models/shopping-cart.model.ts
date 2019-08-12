import { ShoppingCartItem } from './shopping-cart-item.model';
import { Product } from './product.model';

export class ShoppingCart {
  shoppingCartItemCount: number;
  // Because we need to easily iterate though all the items in the shopping cart, we declare another property that returns our shopping cart items as an array
  items: ShoppingCartItem[] = [];

  constructor(private itemsMap: { [productId: string]: ShoppingCartItem }) {
    this.itemsMap = itemsMap || {};
    for (let productId in itemsMap) {
      let item = itemsMap[productId];
      this.items.push(
        new ShoppingCartItem({
          ...item,
          $key: productId
        })
      );
    }
  }

  get totalItemsCount() {
    let count = 0;
    /**
     * So items here is an object and not an array
     * We now need to iterate through the items in the object,
     * using the product key to find the product we need its quantity.
     */
    for (let productId in this.itemsMap)
      count += this.itemsMap[productId].quantity;
    return count;
  }

  get totalPrice() {
    let sum = 0;
    for (let productId in this.items) sum += this.items[productId].totalPrice;
    return sum;
  }

  getQuantity(product: Product) {
    let item = this.itemsMap[product.$key];
    return item ? item.quantity : 0;
  }

  get productIds() {
    return Object.keys(this.itemsMap);
  }
}
