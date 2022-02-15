import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminCommentsComponent } from './admin-comments/admin-comments.component';

const adminRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent }
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
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { }
