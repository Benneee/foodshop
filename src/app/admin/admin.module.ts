import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataTableModule } from 'angular5-data-table';

import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    DataTableModule.forRoot(),
    FormsModule,
    SharedModule,
    AdminRoutingModule
  ],
  providers: [AdminAuthGuard]
})
export class AdminModule {}
