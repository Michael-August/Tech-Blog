import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllPostsGuard } from "../shared/guards/all-posts-guard.guard";
import { SharedModule } from "../shared/shared.module";
import { AllPostComponent } from "./all-post/all-post.component";
import { EachPostListComponent } from "./all-post/each-post-list.component";
import { BannerComponent } from './banner/banner.component';
import { EachPostComponent } from "./each-post/each-post.component";
import { PostListComponent } from "./post-list/post-list.component";

const homeRoutes: Routes = [
    { path: '', component: BannerComponent },
    { path: 'all-post', component: AllPostComponent, canActivate: [AllPostsGuard] }
]

@NgModule({
  declarations: [
    BannerComponent,
    PostListComponent,
    EachPostComponent,
    AllPostComponent,
    EachPostListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    SharedModule
  ]
})
export class HomeModule { }