import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EachPostComponent } from "./components/each-post/each-post.component";

@NgModule({
    declarations: [
        EachPostComponent
    ],

    imports: [
        CommonModule
    ],

    exports: [
        EachPostComponent
    ],

    providers: [

    ]
})

export class SharedModule {  }