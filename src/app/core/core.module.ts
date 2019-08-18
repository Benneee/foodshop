import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'shared/shared.module';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [SharedModule, NgbModule, CoreRoutingModule],
  exports: [NavbarComponent]
})
export class CoreModule {}
