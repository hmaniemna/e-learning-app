import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

//--------------------------
//This is the importation in the last project


/**import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';*/

//-----------------------------------------

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AdminSpaceComponent } from './admin-space/admin-space.component';
import { ManageClassroomComponent } from './admin-space/manage-classroom/manage-classroom.component';
import { ManageTeacherComponent } from './admin-space/manage-teacher/manage-teacher.component';
import { ManageSubjectComponent } from './admin-space/manage-subject/manage-subject.component';
import { ManageCalendarComponent } from './admin-space/manage-calendar/manage-calendar.component';
import { ManageStudentComponent } from './admin-space/manage-student/manage-student.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; 

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminSpaceComponent,
    ManageClassroomComponent,
    ManageTeacherComponent,
    ManageSubjectComponent,
    ManageCalendarComponent,
    ManageStudentComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    FullCalendarModule

    //OLD CODE MABY WILL BE NEEDED

   /* MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatCarouselModule,
    MDBBootstrapModule,
    ToastrModule,
    MatDialogModule,
    MatSidenavModule*/
   
 
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    HomeComponent
    ],

})
export class AppModule { }
