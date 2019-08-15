import { User } from 'shared/models/user.model';
import { UserService } from 'shared/services/user.service';
import { AuthService } from 'shared/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  user: firebase.User;
  appUser: User;
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  canActivate(): Observable<boolean> {
    return this.authService.appUser$.map(appUser => appUser.isAdmin);
  }
}
