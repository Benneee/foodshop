export class Product {
  public title: string;
  public price: number;
  public category: string;
  public imageUrl: string;

  constructor(
    title: string,
    price: number,
    category: string,
    imageUrl: string
  ) {
    this.title = title;
    this.price = price;
    this.category = category;
    this.imageUrl = imageUrl;
  }
}
