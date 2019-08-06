import { SpinnerComponent } from './spinner/spinner.component';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard } from './auth/authguard.service';
import { SignupComponent } from './auth/signup/signup.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './auth/login/login.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'spinner', component: SpinnerComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // Uncomment these ones below, then delete the other ones currently running without guard
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
  // { path: 'my/orders', component: MyOrdersComponent },
  // { path: 'check-out', component: CheckOutComponent },
  {
    path: 'order-success',
    component: OrderSuccessComponent,
    canActivate: [AuthGuard]
  },
  // Uncomment the the guards code
  // Admin Routes
  {
    path: 'admin/products/new',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'admin/products/:id',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'admin/orders',
    component: AdminOrdersComponent,
    canActivate: [AuthGuard, AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
