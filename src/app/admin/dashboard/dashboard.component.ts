import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/auth-area/auth-area.model';
import { AuthAreaService } from 'src/app/shared/services/auth-area.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: IUser = null

  constructor(private auth: AuthAreaService) { }

  ngOnInit(): void {
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

}
