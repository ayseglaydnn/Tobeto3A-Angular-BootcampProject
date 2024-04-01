import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


export const routes: Routes = [
    {path:'', redirectTo:'homepage',pathMatch:'full'},
    {path:'homepage',component:HomepageComponent},
    {path:'login',component:LoginPageComponent}
];
