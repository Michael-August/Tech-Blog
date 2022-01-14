import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostDetailsComponent } from './post-details/post-details.component';

const postDetailsRoutes: Routes = [
    { path: '', component: PostDetailsComponent }
]

@NgModule({
    declarations: [
    PostDetailsComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(postDetailsRoutes)
    ],
    exports: [

    ]
})

export class PostDetailsModule {  }