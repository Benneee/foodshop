import { User } from './models/user.model';
import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseObjectObservable
} from 'angularfire2/database';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  // usersUrl: string = 'https://foodshop-645cb.firebaseio.com/users.json';
  constructor(private db: AngularFireDatabase) {
    this.db.list('/users/');
  }

  save(user: firebase.User) {
    // return this.http.post(this.usersUrl, user);

    // This gave me headache, had to change the target in tsconfig.json from es2015 to es5 before the 'new' keyword error was cleansed
    this.db.object('/users/' + user.uid).update({
      name: user.email,
      email: user.email
    });
  }

  get(uid: string): FirebaseObjectObservable<User> {
    return this.db.object('/users/' + uid);
  }
}
