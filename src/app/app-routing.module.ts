import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { SpinnerComponent } from './spinner/spinner.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'spinner', component: SpinnerComponent },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
