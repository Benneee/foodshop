import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'environments/environment';
import { CustomFormsModule } from 'ng2-validation';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';
import { ProductFilterComponent } from './shopping/components/products/product-filter/product-filter.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { SharedModule } from './shared/shared.module';
import { ShippingFormComponent } from './shopping/components/shipping-form/shipping-form.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import { ShoppingcartSummaryComponent } from './shopping/components/shoppingcart-summary/shoppingcart-summary.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { DataTableModule } from 'angular5-data-table';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    LoginComponent,
    SignupComponent,
    SpinnerComponent,
    ProductFilterComponent,
    ShoppingcartSummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DataTableModule.forRoot(),
    FormsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
