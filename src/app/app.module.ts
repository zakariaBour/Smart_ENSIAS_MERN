import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'studentdetails', component: StudentListComponent },
  { path: 'Addstudent', component: AddStudentComponent },
  { path:'teachers',component : TeacherListComponent},
  { path: 'addTeacher',component : AddTeacherComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    AddStudentComponent,
    StudentListComponent, LoginComponent,
    DashboardComponent,
    TeacherListComponent,
    AddTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // RouterModule.forRoot([
    //   { path: '', component: MainComponent },
    //   { path: 'studentdetails', component: StudentListComponent },
    //   { path: 'Addstudent', component: AddStudentComponent }
    // ])
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
