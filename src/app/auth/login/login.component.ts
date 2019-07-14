import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {}

  // login() {
  //   this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  // }

  signIn(loginForm: NgForm) {
    const email = loginForm.value.email;
    const password = loginForm.value.password;
    console.log('form details:', email, password);
    this.authService.signinUser(email, password);
  }
}
