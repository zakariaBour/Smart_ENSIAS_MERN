import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentComponent } from './add-student.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { throwError } from 'rxjs';
describe('AddStudentComponent', () => {
  let component: AddStudentComponent;
  let fixture: ComponentFixture<AddStudentComponent>;
  let studentService: StudentService;
  let toastrService: ToastrService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentComponent,NavbarComponent,
        SidebarComponent],
       imports: [RouterTestingModule, 
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        FormsModule
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddStudentComponent);
    component = fixture.componentInstance;
    studentService = TestBed.inject(StudentService);
    toastrService = TestBed.inject(ToastrService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize the form with required fields', () => {
    const addStudentForm = component.addStudentForm;

    expect(addStudentForm.contains('firstname')).toBe(true);
    expect(addStudentForm.contains('lastname')).toBe(true);
    expect(addStudentForm.contains('gender')).toBe(true);
    expect(addStudentForm.contains('dob')).toBe(true);
    expect(addStudentForm.contains('mobileNumber')).toBe(true);
    expect(addStudentForm.contains('codeApogee')).toBe(true);
    expect(addStudentForm.contains('PasswordAccount')).toBe(true);
    expect(addStudentForm.contains('confirmPassword')).toBe(true);
    expect(addStudentForm.contains('email')).toBe(true);

    const firstnameControl = addStudentForm.get('firstname');
    expect(firstnameControl?.hasError('required')).toBe(true);

    const lastnameControl = addStudentForm.get('lastname');
    expect(lastnameControl?.hasError('required')).toBe(true);

    const genderControl = addStudentForm.get('gender');
    expect(genderControl?.hasError('required')).toBe(true);

    const dobControl = addStudentForm.get('dob');
    expect(dobControl?.hasError('required')).toBe(true);

    const mobileNumberControl = addStudentForm.get('mobileNumber');
    expect(mobileNumberControl?.hasError('required')).toBe(true);

    const codeApogeeControl = addStudentForm.get('codeApogee');
    expect(codeApogeeControl?.hasError('required')).toBe(true);

    const PasswordAccountControl = addStudentForm.get('PasswordAccount');
    expect(PasswordAccountControl?.hasError('required')).toBe(true);

    const confirmPasswordControl = addStudentForm.get('confirmPassword');
    expect(confirmPasswordControl?.hasError('required')).toBe(true);

    const emailControl = addStudentForm.get('email');
    expect(emailControl?.hasError('required')).toBe(true);
  });
   it('should initialize the form with required fields', () => {
    const addStudentForm = component.addStudentForm;

    expect(addStudentForm.contains('firstname')).toBe(true);
    expect(addStudentForm.contains('lastname')).toBe(true);
    expect(addStudentForm.contains('gender')).toBe(true);
    expect(addStudentForm.contains('dob')).toBe(true);
    expect(addStudentForm.contains('mobileNumber')).toBe(true);
    expect(addStudentForm.contains('codeApogee')).toBe(true);
    expect(addStudentForm.contains('PasswordAccount')).toBe(true);
    expect(addStudentForm.contains('confirmPassword')).toBe(true);
    expect(addStudentForm.contains('email')).toBe(true);

    const firstnameControl = addStudentForm.get('firstname');
    expect(firstnameControl?.hasError('required')).toBe(true);

    const lastnameControl = addStudentForm.get('lastname');
    expect(lastnameControl?.hasError('required')).toBe(true);

    const genderControl = addStudentForm.get('gender');
    expect(genderControl?.hasError('required')).toBe(true);

    const dobControl = addStudentForm.get('dob');
    expect(dobControl?.hasError('required')).toBe(true);

    const mobileNumberControl = addStudentForm.get('mobileNumber');
    expect(mobileNumberControl?.hasError('required')).toBe(true);

    const codeApogeeControl = addStudentForm.get('codeApogee');
    expect(codeApogeeControl?.hasError('required')).toBe(true);

    const PasswordAccountControl = addStudentForm.get('PasswordAccount');
    expect(PasswordAccountControl?.hasError('required')).toBe(true);

    const confirmPasswordControl = addStudentForm.get('confirmPassword');
    expect(confirmPasswordControl?.hasError('required')).toBe(true);

    const emailControl = addStudentForm.get('email');
    expect(emailControl?.hasError('required')).toBe(true);
  });
  it('should set required validation on firstname field', () => {
    const firstnameControl = component.addStudentForm.get('firstname');
    firstnameControl?.setValue('');
    expect(firstnameControl?.invalid).toBeTruthy();
    expect(firstnameControl?.errors?.["required"]).toBeTruthy();

    firstnameControl?.setValue('John');
    expect(firstnameControl?.valid).toBeTruthy();
  });

 
});


