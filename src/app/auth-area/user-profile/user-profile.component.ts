import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthAreaService } from 'src/app/shared/services/auth-area.service';
import { IUser } from '../auth-area.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  tabState = {
    active_tab: 'OVERVIEW',
    active: true
  }

  public editForm: FormGroup

  loggedInUser

  constructor(private auth: AuthAreaService) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl('', Validators.required),
      img: new FormControl('')
    })

    this.getLoggedInUser()
  }

  setTab(name) {
    this.tabState.active_tab = name
    if(this.tabState.active_tab === 'PROFILE'){
      return this.edit()
    }
  }

  edit() {
    this.auth.getUsersById(this.loggedInUser.id).subscribe(res => {
      this.editForm.patchValue(res)
    })
  }

  getLoggedInUser() {
    let user = localStorage.getItem('logedIn')
    let parsed = JSON.parse(user)
    this.auth.getSignedUpUsers().subscribe(res => {
        let allUsers: IUser[] = res as any
        console.log(allUsers)
        this.loggedInUser = allUsers.find(u => {
            return u.email === parsed.email && u.password === parsed.password
        })
      console.log(this.loggedInUser)
    })
  }

  submit() {
    this.auth.updateUser(this.editForm.value).subscribe(res => {
      alert('user Updated')
    })
  }
}
