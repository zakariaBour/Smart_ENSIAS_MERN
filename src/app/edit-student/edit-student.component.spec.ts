import { ComponentFixture, TestBed } from '@angular/core/testing';
 
import { EditStudentComponent } from './edit-student.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../models/student';

describe('EditStudentComponent', () => {
  let component: EditStudentComponent;
  let fixture: ComponentFixture<EditStudentComponent>;
  let studentServiceMock: jasmine.SpyObj<StudentService>;
  let toastrServiceMock: jasmine.SpyObj<ToastrService>;
  let activatedRouteMock: jasmine.SpyObj<ActivatedRoute>;
  let formBuilder: FormBuilder;
  beforeEach(async () => {
    studentServiceMock = jasmine.createSpyObj('StudentService', ['findStudentByCne', 'addStudent']);
    toastrServiceMock = jasmine.createSpyObj('ToastrService', ['success', 'error']);
    activatedRouteMock = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);

    await TestBed.configureTestingModule({
      declarations: [ EditStudentComponent,NavbarComponent,
        SidebarComponent],
       imports: [RouterTestingModule, 
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        FormsModule
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize addStudentForm with default values', () => {
    const expectedFormValues = {
      firstname: '',
      lastname: '',
      gender: '',
      dob: '',
      mobileNumber: '',
      codeApogee: '',
      PasswordAccount: '',
      email: ''
    };

    expect(component.addStudentForm.value).toEqual(expectedFormValues);
  });

 
  

});
