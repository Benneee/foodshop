import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'shared/models/user.model';
import { ShoppingCart } from 'shared/models/shopping-cart.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true;
  user: User;
  cart$: Observable<ShoppingCart>;
  // Because we always have to unsubscribe from Firebase, we'll use the async pipe to handle the subscription below in the template

  constructor(
    public authService: AuthService,
    private shoppingCartService: ShoppingCartService
  ) {}

  async ngOnInit() {
    this.authService.appUser$.subscribe(user => (this.user = user));

    this.cart$ = await this.shoppingCartService.getCart();
  }

  logout() {
    this.authService.logoutUser();
  }
}
