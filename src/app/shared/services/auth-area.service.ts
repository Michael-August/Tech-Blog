import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/auth-area/auth-area.model';

@Injectable({
  providedIn: 'root'
})
export class AuthAreaService {

  isLoggedIn: boolean = false

  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user): Observable<Array<IUser[]>> {
    return this.http.post<Array<IUser[]>>('http://localhost:3000/users', user)
  }

  getSignedUpUsers(): Observable<Array<IUser>> {
    return this.http.get<Array<IUser>>('http://localhost:3000/users')
  }

  writeToLocalStorage(logInForm) {
    localStorage.setItem('logedIn', JSON.stringify(logInForm))
  }

}
