import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AUTHENTICATED } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuthenticated = false;

  constructor(
    private router: Router,
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.isAuthenticated = AUTHENTICATED;

      if (this.isAuthenticated)
        return true;
      this.router.navigate(['/login']);
      return false;
  }
  
}
