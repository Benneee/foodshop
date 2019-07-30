import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../providers/product.service';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../providers/category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
/**
 * The take operator helps to take out just one thing from an observable and the observable is closed by itself without us unsubscribing
 */

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  // $: to tell any interested party that categories is an observable
  categories$;
  product = {};
  title;
  price;
  category;
  imageUrl;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.categories$ = categoryService.getCategories();
    // let id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.productService
    //     .getSingleProduct(id)
    //     .take(1)
    //     .subscribe(p => (this.product = p));
    // }
    this.route.paramMap.subscribe(p => {
      const id = p.get('id');
      if (id) {
        this.productService
          .getSingleProduct(id)
          .take(1)
          .subscribe(p => (this.product = p));
      }
    });
  }

  ngOnInit() {}

  save(productForm: NgForm) {
    // console.log(productForm.value);
    const data = productForm.value;
    this.productService.create(data);
    this.router.navigate(['/admin/products']);
  }
}
