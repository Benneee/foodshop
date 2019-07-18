import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  usersUrl: string = 'https://foodshop-645cb.firebaseio.com/users.json';
  constructor(private http: HttpClient) {}

  save(user: firebase.User) {
    return this.http.post(this.usersUrl, user);
  }
}
