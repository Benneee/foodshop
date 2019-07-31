import { Product } from '../../models/product.model';
import { ProductService } from './../../providers/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  filteredProducts: any[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = this.products = products;
      this.initializeTable(products);
    });
  }

  ngOnInit() {}

  filter(value: string) {
    this.filteredProducts = value
      ? this.products.filter(p =>
          p.title.toLowerCase().includes(value.toLowerCase())
        )
      : this.products;
  }

  private initializeTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0 }).then(items => (this.items = items));

    this.tableResource.count().then(count => (this.itemCount = count));
  }

  reloadItems(params) {
    if (!this.tableResource) return;
    this.tableResource.query(params).then(items => (this.items = items));
  }

  /**
   * We use the OnDestroy lifecycle here to unsubscribe from the products observable once the window is closed
   * This can be done using takeOne operator as well, but we don't want to risk using that especially if the user has another window of the application open
   */

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
