import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileComponent } from './my-profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherListComponent } from '../teacher-list/teacher-list.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { OverviewChartComponent } from '../overview-chart/overview-chart.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchTeachersPipe } from '../pipes/search-teachers.pipe';

describe('MyProfileComponent', () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherListComponent,NavbarComponent,
        SidebarComponent,OverviewChartComponent,SearchTeachersPipe,MyProfileComponent],
       imports: [RouterTestingModule, 
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        FormsModule
      ],
    })
    .compileComponents();
    fixture = TestBed.createComponent(MyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
