
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})

export class EditStudentComponent implements OnInit {
  formData: any;
  myStudent: Student = {
    cne: '',
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    gender: '',
    // dob: ,
    password: ''
  }

  students: Student[] = [];
  addStudentForm: FormGroup;

  constructor(private studentService: StudentService,
    private toastr: ToastrService, private route: ActivatedRoute
    , private fb: FormBuilder) {

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
    this.getStudentByCne();
  }
  currentStudent: any;
  current_cne: any;
  ngOnInit(): void {
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
  getStudentByCne() {
    this.current_cne = this.route.snapshot.paramMap.get('cne');
    this.studentService.findStudentByCne(this.current_cne).subscribe(student => {
      this.currentStudent = student;
      console.log(this.currentStudent);


      this.addStudentForm = this.fb.group({
        firstname: this.currentStudent.first_name,
        lastname: this.currentStudent.last_name,
        gender: this.currentStudent.gender,
        dob: this.currentStudent.date_of_birth,
        mobileNumber: this.currentStudent.phone,
        codeApogee: this.currentStudent.cne,
        PasswordAccount: this.currentStudent.password,
        email: this.currentStudent.email
      });
    });
  }
  addStudent(student: Student) {
    this.studentService.addStudent(student).subscribe(students => {
      this.toastr.success('Student added successfully');
    }, error => {
      this.toastr.error('error');
      console.log(error);
    });
  }
  onSubmit(): any {
    this.formData = this.addStudentForm.value;
    let student: Student;
    student = {
      cne: this.formData?.codeApogee,
      first_name: this.formData?.firstname,
      last_name: this.formData?.lastname,
      phone: this.formData?.mobileNumber,
      email: this.formData?.email,
      gender: this.formData?.gender,
      password: this.formData?.PasswordAccount
    }
    //addStudent();
    console.log(this.formData);
    console.log(student);
    this.addStudent(student);
  }

}

