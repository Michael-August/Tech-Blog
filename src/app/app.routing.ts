import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const mainRoute:Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
    },
    {
        path: 'post-details', loadChildren: () => import('./post-details/post-details.module').then(mod => mod.PostDetailsModule)
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(mainRoute, {

        })
    ],
    exports: [RouterModule],
    providers: [

    ]
})
export class AppRoutingModule { }