import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../providers/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
// We use the switchmap operator to handle the issue of nested subscriptions
// The switchmap operator helps us to switch from one obs to another
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];
  filteredProducts: Product[] = [];
  category: string;
  product: string;
  constructor(route: ActivatedRoute, productService: ProductService) {
    // productService.getAll().subscribe(products => {
    //   // First, we get the products, so this particular journey can be complete
    //   this.products = products;

    //   // Now, we do the queryParams observable, so we are sure at this point that the products to fill the page have arrived or that the observable is complete
    //  * We cannot use snapshot here because the component will not be reloaded (destroyed) for another component, the url only changes
    //   route.queryParamMap.subscribe(params => {
    //     this.category = params.get('category');

    //     // Setting the filtered products after category has been selected
    //     this.filteredProducts = this.category
    //       ? this.products.filter(product => product.category === this.category)
    //       : this.products;
    //   });
    // });
    // this.categories$ = categoryService.getAll();
    // /**

    //  */

    productService
      .getAll()
      .switchMap(products => {
        this.products = products;
        return route.queryParamMap;
      })

      .subscribe(params => {
        this.category = params.get('category');

        // Setting the filtered products after category has been selected
        this.filteredProducts = this.category
          ? this.products.filter(product => product.category === this.category)
          : this.products;
      });
    /**
     * We cannot use snapshot here because the component will not be reloaded (destroyed) for another component, the url only changes
     */
  }

  ngOnInit() {}
}
