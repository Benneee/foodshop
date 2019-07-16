import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true;
  user: firebase.User;

  constructor(
    private authService: AuthService,
    private afAuth: AngularFireAuth
  ) {
    afAuth.authState.subscribe(user => this.user = user);
  }

  ngOnInit() {}

  logout() {
    this.authService.logoutUser();
    this.afAuth.auth.signOut();
  }
}
