import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherListComponent } from './teacher-list.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverviewChartComponent } from '../overview-chart/overview-chart.component';
import { SearchHolidaysPipe } from '../pipes/search-holidays.pipe';
import { SearchService } from '../search.service';
import { SearchTeachersPipe } from '../pipes/search-teachers.pipe';
describe('TeacherListComponent', () => {
  let component: TeacherListComponent;
  let fixture: ComponentFixture<TeacherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherListComponent,NavbarComponent,
        SidebarComponent,OverviewChartComponent,SearchTeachersPipe],
       imports: [RouterTestingModule, 
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
       
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
