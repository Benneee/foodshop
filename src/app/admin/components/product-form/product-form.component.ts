import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'shared/services/product.service';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'shared/services/category.service';
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
  id: any;

  formBtn = {
    type: 'create',
    text: 'Save'
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.categories$ = this.categoryService.getAll();

    // let id = this.route.snapshot.params['id'];
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.formBtn = {
        type: 'update',
        text: 'Update'
      };
      this.productService
        .getSingleProduct(this.id)
        .take(1)
        .subscribe(p => (this.product = p));
    }
  }

  save(productForm: NgForm) {
    /**
     * We can call the create or update method within this method,
     * However, this depends on the ID of the product in question
     * Hence, we will need the ID property here as well, so we first make the ID property above a universal property and not just a variable
     */

    if (this.id) {
      this.productService.updateProduct(this.id, productForm.value);
      console.log(`Product with ${this.id} updated successfully`);
    } else {
      const data = productForm.value;
      this.productService.createProduct(data);
    }
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;

    this.productService.deleteProduct(this.id);
    this.router.navigate(['/admin/products']);
  }
}
