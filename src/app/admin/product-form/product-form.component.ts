import { ProductService } from './../../providers/product.service';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../../providers/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  // $: to tell any interested party that categories is an observable
  categories$;

  constructor(
    categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {}

  save(productForm: NgForm) {
    // console.log(productForm.value);
    const data = productForm.value;
    this.productService.create(data);
  }
}
