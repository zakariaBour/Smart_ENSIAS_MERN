import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TeacherListComponent } from './teacher-list.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverviewChartComponent } from '../overview-chart/overview-chart.component';
import { SearchHolidaysPipe } from '../pipes/search-holidays.pipe';
import { SearchService } from '../search.service';
import { SearchTeachersPipe } from '../pipes/search-teachers.pipe';
import { TeacherService } from '../services/teacher.service';
import { Teacher } from '../models/teacher';
describe('TeacherListComponent', () => {
  let component: TeacherListComponent;
  let fixture: ComponentFixture<TeacherListComponent>;
  let teacherServiceMock: Partial<TeacherService>;
  let toastrServiceMock: Partial<ToastrService>;

  beforeEach(async () => {
    teacherServiceMock = {
      getTeachers: jasmine.createSpy('getTeachers').and.returnValue(of([])),
      deleteTeacher: jasmine.createSpy('deleteTeacher').and.returnValue(of({})),
    };
    toastrServiceMock = {
      success: jasmine.createSpy('success'),
      error: jasmine.createSpy('error'),
    };
    await TestBed.configureTestingModule({
      declarations: [ TeacherListComponent,NavbarComponent,
        SidebarComponent,OverviewChartComponent,SearchTeachersPipe],
       imports: [RouterTestingModule, 
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
       
      ],
      providers: [
        { provide: TeacherService, useValue: teacherServiceMock },
        { provide: ToastrService, useValue: toastrServiceMock },
        SearchService,
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
  it('should call getTeachers on component initialization', () => {
    expect(teacherServiceMock.getTeachers).toHaveBeenCalled();
  });

  it('should call deleteTeacher and getTeachers on deleteTeacher', () => {
    const teacherId = 'teacherId';
    component.deleteTeacher(teacherId);
    expect(teacherServiceMock.deleteTeacher).toHaveBeenCalledWith(teacherId);
    expect(toastrServiceMock.success).toHaveBeenCalledWith('Teacher deleted successfully');
    expect(teacherServiceMock.getTeachers).toHaveBeenCalled();
  });


  it('should generate CSV data correctly', () => {
    const teachers  : Teacher[]= [
      {
        id: 1,
        matricule: 'T001',
        firstname: 'John',
        lastname: 'Doe',
        phone: '1234567890',
        email: 'john.doe@example.com',
        gender: 'MALE',
        image_url: 'teacher.jpg',
        date_of_birth: '1990-01-01',
        password: 'password',
      },
    ];
    const expectedData =
      'ID,CNE,First Name,Last Name,Phone,Email,Gender,Image URL,Date of Birth,Password\n' +
      '1,T001,John,Doe,1234567890,john.doe@example.com,MALE,teacher.jpg,1990-01-01,password';
    const generatedData = component.generateCsvData(teachers);
    expect(generatedData).toBe(expectedData);
  });
});
