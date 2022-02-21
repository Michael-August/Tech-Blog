import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SWEET_ALERT } from '../utils/helper';

@Injectable({
  providedIn: 'root'
})
export class AllPostsGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate() {
    if (localStorage.length) {
      return true
    } else {
      SWEET_ALERT('Error', "You don't have access to this page, You need to login first...", 'error', 'error', 'ok', false, undefined, undefined)
      this.router.navigate(['auth-area/login'])
    }
  }
  
}
