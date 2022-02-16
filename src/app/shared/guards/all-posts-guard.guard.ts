import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

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
      alert("You don't have access to this page, You need to login first...")
      this.router.navigate(['auth-area/login'])
    }
  }
  
}
