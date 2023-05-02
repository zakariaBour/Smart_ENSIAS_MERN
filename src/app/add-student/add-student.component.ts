import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  providers : [StudentService]
})
export class AddStudentComponent {
  formData: any;
  myStudent: Student = {
    cne: '',
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    gender: '',
    // dob: ,
    password: ''
  }
  

 
  students: Student[] = [];
  addStudentForm: FormGroup;

  // constructor(private formBuilder: FormBuilder, private studentService: StudentService) { }

  constructor(private studentService : StudentService,private toastr: ToastrService) {
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
        Validators.minLength(8)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
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
  addStudent(student : Student){
   console.log(student);
      this.studentService.addStudent(student).subscribe(students => {
        this.toastr.success('Student added successfully');
      },error => {
        this.toastr.error('error');
        console.log(error);
      });
  }
  onSubmit(): any {
    this.formData = this.addStudentForm.value;
    let student : Student;
    student = {
      cne : this.formData?.codeApogee,
      firstname : this.formData?.firstname,
      lastname : this.formData?.lastname,
      phone : this.formData?.mobileNumber,
      email : this.formData?.email,
      gender : this.formData?.gender=='Male' ? 'HOMME': 'FEMME',
      password : this.formData?.PasswordAccount,
      date_of_birth : "1999-08-17"
    }
   
    console.log(student);
    let x= this.addStudent(student);
    console.log(x);
  }

  /*
   PasswordAccount
: 
"dkkdkddkd"
codeApogee
: 
"kkdkdkd"
dob
: 
"2023-04-06"
email
: 
"abderazaknfissi34@gmail.com"
firstname
: 
"abderrazzak"
gender
: 
"Male"
lastname
: 
"nfissi"
mobileNumber
: 
"0611461930"

  */
  
}
