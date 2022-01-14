import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { BannerComponent } from './banner/banner.component';
import { PostListComponent } from "./post-list/post-list.component";

const homeRoutes: Routes = [
    { path: '', component: BannerComponent }
]

@NgModule({
  declarations: [
    BannerComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    SharedModule
  ]
})
export class HomeModule { }