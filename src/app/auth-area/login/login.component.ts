import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthAreaService } from 'src/app/shared/services/auth-area.service';
import { SWEET_ALERT, topEndAlert } from 'src/app/shared/utils/helper';
import { IUser } from '../auth-area.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userExist:IUser 

  public logInForm: FormGroup
  constructor(private authSrv: AuthAreaService, private router: Router) { }

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  get email() {
    return this.logInForm.get('email')
  }

  get password() {
    return this.logInForm.get('password')
  }

  logIn() {
    this.authSrv.getSignedUpUsers().subscribe(users => {
      this.userExist = users.find( u => {
        return u.email === this.logInForm.get('email').value && u.password === this.logInForm.get('password').value
      })
      if(this.userExist){
        this.authSrv.writeToLocalStorage(this.logInForm.value)
        console.log(this.logInForm.value)
        if(this.userExist.role === 'Member') {
          this.router.navigate(['home/all-post'])
        } else {
          this.router.navigate(['/admin-area/admin/dashboard'])
          topEndAlert('top-end', `User ${this.userExist.firstName} logged in successfully`, 'success')
        }

      } else {
        SWEET_ALERT('Error', `email or password not correct`, 'error', 'error', 'ok', false, undefined, undefined)
        // this.router.navigate(['auth-area/signup'])
      }
    })
  }

}
