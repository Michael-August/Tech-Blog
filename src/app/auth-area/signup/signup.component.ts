import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthAreaService } from 'src/app/shared/services/auth-area.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm: FormGroup
  
  constructor(private authServ: AuthAreaService, private route: Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      img: new FormControl(''),
      role: new FormControl('Member'),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  get fname() {
    return this.signUpForm.get('firstName')
  }

  get lname() {
    return this.signUpForm.get('lastName')
  }

  get email() {
    return this.signUpForm.get('email')
  }

  get password() {
    return this.signUpForm.get('password')
  }

  get cpassword() {
    return this.signUpForm.get('confirmPassword')
  }

  private validateAllFormFields = (formGroup: FormGroup) => {         // {1}
    Object.keys(formGroup.controls).forEach(field => {  // {2}
      const control = formGroup.get(field);             // {3}
      if (control instanceof FormControl) {             // {4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        // {5}
        this.validateAllFormFields(control);            // {6}
      }
    });
  };

  signUp() {
    if(this.signUpForm.invalid){
      return this.validateAllFormFields(this.signUpForm)
    }
    // checking password
    if(this.signUpForm.get('password').value !== this.signUpForm.get('confirmPassword').value) {
      alert("Password doesn't Match")
      return;
    }
     
    this.authServ.signUpUser(this.signUpForm.value).subscribe(() => {
      alert(`New User ${this.signUpForm.get('firstName').value} is created successfully`)
      this.signUpForm.reset()
      this.route.navigate(['auth-area/login'])
    })
  }

}
