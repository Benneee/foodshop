import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (this.authService.user) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
