import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminCommentsComponent } from './admin-comments/admin-comments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

const adminRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'posts', component: AdminPostsComponent },
  { path: 'users', component: AdminUsersComponent },
  { path: 'comments', component: AdminCommentsComponent },
]

@NgModule({
  declarations: [
    DashboardComponent,
    AdminIndexComponent,
    SideNavComponent,
    AdminPostsComponent,
    AdminUsersComponent,
    AdminCommentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,
    ReactiveFormsModule,
    QuillModule
  ]
})
export class AdminModule { }
