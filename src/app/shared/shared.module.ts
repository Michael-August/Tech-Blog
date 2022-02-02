import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
// import { EachPostComponent } from "./components/each-post/each-post.component";

@NgModule({
    declarations: [
        UserProfileComponent
    ],

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],

    exports: [
        UserProfileComponent
    ],

    providers: [

    ]
})

export class SharedModule {  }