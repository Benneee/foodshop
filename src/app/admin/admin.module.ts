import { NgModule } from '@angular/core';
import { SharedModule } from 'shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';

@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent
  ],
  imports: [SharedModule, AdminRoutingModule],
  providers: [AdminAuthGuard]
})
export class AdminModule {}
