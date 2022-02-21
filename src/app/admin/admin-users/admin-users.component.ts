import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/auth-area/auth-area.model';
import { AuthAreaService } from 'src/app/shared/services/auth-area.service';
import { closeAsyncLoader, showAsyncLoader, topEndAlert } from 'src/app/shared/utils/helper';
import Swal,  {  } from 'sweetalert2'

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  userForm: FormGroup
  users: IUser[] = []
  isCreate: boolean = true

  constructor(private auth: AuthAreaService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      lastName: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      img: new FormControl(''),
      email: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required])
    })

    this.getUsers()
  }

  getUsers() {
    showAsyncLoader('Proccessing, please wait...')
    this.auth.getSignedUpUsers().subscribe(res => {
      this.users = res 
    }).add(closeAsyncLoader())
  }

  createUser() {
    this.isCreate = true
    this.userForm.reset()
  }

  editUser(id: number) {
    this.isCreate = false
    this.auth.getUsersById(id).subscribe(res => {
      this.userForm.patchValue(res)
    })
  }

  deleteUser(id: number) {
    this.auth.deleteUser(id)
    console.log('deleted')
    this.getUsers()
  }

  submit() {
    const payload = this.userForm.value
    showAsyncLoader('Processing, please wait...')
    const endPoint = this.isCreate ? this.auth.signUpUser(payload) : this.auth.updateUser(payload)
    endPoint.subscribe(res => {
      console.log(res)
      let close = document.getElementById('close')
      close.click()
      topEndAlert('top-end', `New User ${payload['firstName']} has been created successfully`, 'success')
      this.getUsers()
    }).add(closeAsyncLoader())
  }

}
