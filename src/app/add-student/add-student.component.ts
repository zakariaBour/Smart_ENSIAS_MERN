import { StudentService } from './../Services/student.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../models/student';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  formData: any;
  myStudent: Student = {
    CNE: '',
    firstName: '',
    lastName: '',
    phone: '',
    mail: '',
    gender: '',
    // dob: ,
    password: ''
  }
  students: Student[] = [];
  addStudentForm: FormGroup;

  // constructor(private formBuilder: FormBuilder, private studentService: StudentService) { }

  constructor() {
    this.addStudentForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      gender: new FormControl('', [
        Validators.required
      ]),
      dob: new FormControl('', [
        Validators.required,
        //  this.dobValidator
      ]),
      mobileNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{7,}$/)
      ]),
      codeApogee: new FormControl('', [
        Validators.required
      ]),
      PasswordAccount: new FormControl('', [
        Validators.required,
        Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\W).+$/)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+_\w+@um5\.ac\.ma$/)
      ])
    });
  }
  get firstname() {
    return this.addStudentForm.get('firstname');
  }
  get lastname() {
    return this.addStudentForm.get('lastname');
  }
  get gender() {
    return this.addStudentForm.get('gender');
  }
  get dob() {
    return this.addStudentForm.get('dob');
  }

  get mobileNumber() {
    return this.addStudentForm.get('mobileNumber');
  }

  get codeApogee() {
    return this.addStudentForm.get('codeApogee');
  }

  get PasswordAccount() {
    return this.addStudentForm.get('PasswordAccount');
  }

  get email() {
    return this.addStudentForm.get('email');
  }



  onSubmit(): any {
    this.formData = this.addStudentForm.value;
    console.log(this.formData);
  }
  // dobValidator(control: FormControl) {
  //   const selectedDate = new Date(control.value);
  //   const today = new Date();
  //   if (selectedDate > today) {
  //     return { futureDate: true };
  //   }
  //   return null;
  // }
  // persistStudent() {
  //   this.myStudent.firstName = this.firstname?.value;

  //   this.studentService.addStudent(this.myStudent).subscribe(
  //     (student) => {
  //       this.students = [student, ...this.students];
  //       this.resetStudents();
  //       console.log('POST request successful');
  //     },
  //     (error) => {
  //       console.log('POST request failed:', error);
  //     }
  //   );
  // }

  // resetStudents() {
  //   this.myStudent = {
  //     CNE: '',
  //     firstName: '',
  //     lastName: '',
  //     phone: '',
  //     mail: '',
  //     gender: '',
  //     // dob: new Date,
  //     password: ''
  //   }
  // }
}
