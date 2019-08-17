import { User } from 'shared/models/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'shared/services/user.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  token: string;
  user: firebase.User;
  newUser: User;
  user$: Observable<firebase.User>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private afAuth: AngularFireAuth,
    private userService: UserService
  ) {
    afAuth.authState.subscribe(user => (this.user = user));
    this.user$ = afAuth.authState;
  }

  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => console.log('sign up successful:', res))
      .catch(error => console.log('error signing up:', error));
  }

  signinUser(email: string, password: string) {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    localStorage.setItem('returnUrl', returnUrl);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => (this.token = token));
        console.log('sign in successful:', res);
        if (this.user) {
          let returnUrl = localStorage.getItem('returnUrl');
          if (returnUrl === 'null') {
            this.router.navigate(['/']);
          } else if (returnUrl) {
            localStorage.removeItem('returnUrl');
            this.router.navigateByUrl(returnUrl);
          }

          this.userService.save(this.user);
        }
      })
      .catch(err => console.log('error signing in:', err));
  }

  logoutUser() {
    firebase.auth().signOut();
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
    this.token = null;
  }

  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => (this.token = token));
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
  get appUser$(): Observable<User> {
    return this.user$.switchMap(user => {
      if (user) {
        return this.userService.get(user.uid);
      } else {
        return Observable.of(null);
      }
    });
  }
}