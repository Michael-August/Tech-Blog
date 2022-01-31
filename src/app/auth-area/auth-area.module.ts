import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';

const authRoutes: Routes = [
   { path: 'signup', component: SignupComponent },
   { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthAreaModule { }
