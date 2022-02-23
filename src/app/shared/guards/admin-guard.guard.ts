import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/auth-area/login/login.component';
import { SWEET_ALERT } from '../utils/helper';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard extends LoginComponent implements CanActivate {

  canActivate() {
    if(this.userExist.role === 'Admin') {
      return true
    } else {
      SWEET_ALERT('Error', "You are not priviledged to view this page", 'error', 'error', 'Ok', false, false, undefined)
      this.router.navigate(['/home'])
    }
  }
  
}
