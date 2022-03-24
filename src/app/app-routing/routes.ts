import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AdminSpaceComponent } from '../admin-space/admin-space.component';
import { LoginStudentComponent } from '../login-all/login-student/login-student.component';
import { LoginAdminComponent } from '../login-all/login-admin/login-admin.component';
import { ManageCalendarComponent } from '../admin-space/manage-calendar/manage-calendar.component';
import { SectionsComponent } from '../home/sections/sections.component';
import { CalendarComponent } from '../admin-space/manage-calendar/calendar/calendar.component';
import { ManageStudentComponent } from '../admin-space/manage-student/manage-student.component';
import { ManageTeacherComponent } from '../admin-space/manage-teacher/manage-teacher.component';
import { CreateStudentComponent } from '../admin-space/manage-student/create-student/create-student.component';
import { AddNewTeacherComponent } from '../admin-space/manage-teacher/add-new-teacher/add-new-teacher.component';

export const routes: Routes = [
    
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',  component: HomeComponent },
    {path: 'sections',  component: SectionsComponent },
    {path: 'admin-space',  component: AdminSpaceComponent},
    { path: 'login-admin',  component: LoginAdminComponent },

    {path: 'manage-calendar',  component: ManageCalendarComponent},
    {path: 'calendar',  component: CalendarComponent },
    
    {path: 'manage-teacher',  component: ManageTeacherComponent },
    {path: 'add_new_teacher',  component: AddNewTeacherComponent },

    { path: 'login-student',  component: LoginStudentComponent },
    {path: 'manage-student',  component: ManageStudentComponent },
    {path: 'create-student',  component: CreateStudentComponent },

];