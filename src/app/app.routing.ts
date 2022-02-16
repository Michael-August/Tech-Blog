import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminIndexComponent } from "./admin/admin-index/admin-index.component";
import { FourOFourComponent } from "./shared/components/404.component";

const mainRoute:Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
    },
    {
        path: 'post-details', loadChildren: () => import('./post-details/post-details.module').then(mod => mod.PostDetailsModule)
    },
    {
        path: 'auth-area', loadChildren: () => import('./auth-area/auth-area.module').then(mod => mod.AuthAreaModule)
    },
    {
        path: 'admin-area',
        component: AdminIndexComponent,
        canActivate: [],
        children: [
            { path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule) }
        ]
    },

    { path: 'not-found', component: FourOFourComponent },
    { path: '**', redirectTo: 'not-found' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(mainRoute, {
            scrollPositionRestoration: 'enabled'
        })
    ],
    exports: [RouterModule],
    providers: [

    ]
})
export class AppRoutingModule { }