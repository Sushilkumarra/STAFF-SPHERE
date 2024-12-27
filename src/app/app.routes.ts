import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { AuthComponent } from './component/auth/auth.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ErrorComponent } from './component/error/error.component';
import { HomeComponent } from './component/home/home.component';


export const routes: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path:'auth',
        component:AuthComponent
    },
    {
        path:"profile",
        component:ProfileComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path: '**',
        component:ErrorComponent

    }
];
