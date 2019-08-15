import { AuthService } from 'shared/services/auth.service';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route, state: RouterStateSnapshot) {
    if (this.authService.user) {
      return true;
    } else {
      this.router.navigate(['login'], {queryParams: { returnUrl: state.url }});
      return false;
    }
  }
}
