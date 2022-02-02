import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostBodyComponent } from './post-body/post-body.component';
import { CommentComponent } from "./comments/comment.component";
import { AllPostsGuard } from "../shared/guards/all-posts-guard.guard";

const postDetailsRoutes: Routes = [
    { path: '', component: PostDetailsComponent },
    { path: 'posts/:id', component: PostDetailsComponent, canActivate: [AllPostsGuard] }
]

@NgModule({
    declarations: [
        PostDetailsComponent,
        PostBodyComponent,
        CommentComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(postDetailsRoutes)
    ]
})

export class PostDetailsModule {  }