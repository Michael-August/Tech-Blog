import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../auth-area/auth-area.model';
import { AuthAreaService } from '../shared/services/auth-area.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = null
  user: IUser = null

  constructor(private router: Router, private auth: AuthAreaService) { }

  ngOnInit(): void {
    if(localStorage.length) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
    this.getLoggedInUser()
  }

  getLoggedInUser() {
    const currentUser = localStorage.getItem("logedIn")
    let email = JSON.parse(currentUser).email
    let password = JSON.parse(currentUser).password

    this.auth.getSignedUpUsers().subscribe(users => {
      this.user = users.find(u => {
        return u.email === email && u.password === password
      })
    })
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['auth-area/login'])
  }

}
