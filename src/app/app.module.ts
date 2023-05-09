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
import { TeacherAttendanceComponent } from './teacher-attendance/teacher-attendance.component';
import { HolidayComponent } from './holiday/holiday.component';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { ExamComponent } from './exam/exam.component';
import { EventsComponent } from './events/events.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HolidayService } from './services/holiday.service';
import { AuthGuard } from './auth.guard';
import { AddEventComponent } from './add-event/add-event.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { BranchService } from './services/branch.service';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { SubjectService } from './services/subject.service';
import { SearchFlterPipe } from './pipes/search-flter.pipe';
import { SearchHolidaysPipe } from './pipes/search-holidays.pipe';
import { SearchTeachersPipe } from './pipes/search-teachers.pipe';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'studentdetails', component: StudentListComponent },
  { path: 'Addstudent', component: AddStudentComponent, canActivate: [AuthGuard], data: { allowedRoles: ['admin'] } },
  { path: 'teachers', component: TeacherListComponent },
  { path: 'addTeacher', component: AddTeacherComponent, canActivate: [AuthGuard], data: { allowedRoles: ['admin'] } },
  { path: 'editStudent/:cne', component: EditStudentComponent, canActivate: [AuthGuard], data: { allowedRoles: ['admin'] } },
  { path: 'editTeacher/:cne', component: EditTeacherComponent, canActivate: [AuthGuard], data: { allowedRoles: ['admin'] } },
  { path: 'attendance', component: StudentAttendanceComponent },
  { path: 'teachers', component: TeacherListComponent },
  { path: 'addTeacher', component: AddTeacherComponent, canActivate: [AuthGuard], data: { allowedRoles: ['admin'] } },
  { path: 'editStudent/:cne', component: EditStudentComponent, canActivate: [AuthGuard], data: { allowedRoles: ['admin'] } },
  { path: 'attendance/students', component: StudentAttendanceComponent },
  { path: 'attendance/teachers', component: TeacherAttendanceComponent },
  { path: 'holiday/add', component: AddHolidayComponent, canActivate: [AuthGuard], data: { allowedRoles: ['admin'] } },
  { path: 'holiday', component: HolidayComponent },
  { path: 'exams', component: ExamComponent },
  { path: 'events', component: EventsComponent },
  { path: 'addevents', component: EventsComponent },
  { path: 'branchs', component: BranchListComponent },
  { path: 'branchs/add', component: AddBranchComponent, canActivate: [AuthGuard], data: { allowedRoles: ['admin'] } },
  { path: 'subjects', component: SubjectListComponent },
  { path: 'subjects/add', component: AddSubjectComponent, canActivate: [AuthGuard], data: { allowedRoles: ['admin'] } },
];

@NgModule({
  declarations: [
    AddEventComponent,
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
    SearchHolidaysPipe,
    AddBranchComponent,
    BranchListComponent,
    EditTeacherComponent,
    SubjectListComponent,
    AddSubjectComponent,
    SearchTeachersPipe,
    EditTeacherComponent,
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
    AuthGuard,
    BranchService,
    SubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
