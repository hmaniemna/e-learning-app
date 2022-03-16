import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AdminSpaceComponent } from '../admin-space/admin-space.component';
import { LoginComponent } from '../login/login.component';
import { ManageCalendarComponent } from '../admin-space/manage-calendar/manage-calendar.component';

export const routes: Routes = [
    { path: '', redirectTo: '/manage-calendar', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent },
    {path: 'admin-space',  component: AdminSpaceComponent},
    { path: 'login',  component: LoginComponent },
    {path: 'manage-calendar',  component: ManageCalendarComponent}
];