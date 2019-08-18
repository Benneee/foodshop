import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular5-data-table';
import { CustomFormsModule } from 'ng2-validation';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/authguard.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [ProductCardComponent, ProductQuantityComponent],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    FormsModule,
    CustomFormsModule,
    CommonModule,
    DataTableModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService,
    UserService
  ]
})
export class SharedModule {}

// Ctrl + Alt + 0 to sort services alphabetically
