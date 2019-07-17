import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true;

  // Because we always have to unsubscribe from Firebase, we'll use the async pipe to handle the subscription below in the template

  constructor(public authService: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authService.logoutUser();
  }
}
