import { TeacherService } from './services/teacher.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from "ng-apexcharts";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentService } from './services/student.service';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { OverviewChartComponent } from './overview-chart/overview-chart.component';
import { ClassAttendanceOverviewComponent } from './class-attendance-overview/class-attendance-overview.component';
import { SearchFlterPipe } from './search-flter.pipe';
import { TeacherAttendanceComponent } from './teacher-attendance/teacher-attendance.component';
import { HolidayComponent } from './holiday/holiday.component';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { ExamComponent } from './exam/exam.component';
import { EventsComponent } from './events/events.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HolidayService } from './services/holiday.service';
import { SearchHolidaysPipe } from './search-holidays.pipe';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'studentdetails', component: StudentListComponent },
  { path: 'Addstudent', component: AddStudentComponent,canActivate : [AuthGuard],data: { allowedRoles: ['admin'] }  },
  { path: 'teachers', component: TeacherListComponent },
  { path: 'addTeacher', component: AddTeacherComponent ,canActivate :[AuthGuard],data: { allowedRoles: ['admin'] } },
  { path: 'editStudent/:cne', component: EditStudentComponent, canActivate:[AuthGuard] , data: { allowedRoles: ['admin'] }},
  { path: 'attendance', component: StudentAttendanceComponent },
  { path: 'teachers', component: TeacherListComponent },
  { path: 'addTeacher', component: AddTeacherComponent ,canActivate:[AuthGuard] , data: { allowedRoles: ['admin'] } },
  { path: 'editStudent/:cne', component: EditStudentComponent,canActivate:[AuthGuard] , data: { allowedRoles: ['admin'] } },
  { path: 'attendance/students', component: StudentAttendanceComponent },
  { path: 'attendance/teachers', component: TeacherAttendanceComponent },
  { path: 'holiday/add', component: AddHolidayComponent ,canActivate:[AuthGuard] , data: { allowedRoles: ['admin'] }},
  { path: 'holiday', component: HolidayComponent },
  { path: 'exams', component: ExamComponent },
  { path: 'events', component: EventsComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    AddStudentComponent,
    StudentListComponent,
    LoginComponent,
    DashboardComponent,
    TeacherListComponent,
    AddTeacherComponent,
    EditStudentComponent,
    StudentAttendanceComponent,
    OverviewChartComponent,
    ClassAttendanceOverviewComponent,
    SearchFlterPipe,
    TeacherAttendanceComponent,
    HolidayComponent,
    AddHolidayComponent,
    ExamComponent,
    EventsComponent,
    SearchHolidaysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgApexchartsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),

  ],
  providers: [
    StudentService,
    TeacherService,
    HolidayService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
