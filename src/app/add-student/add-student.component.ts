import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { ToastrService } from 'ngx-toastr';
import { FiliereService } from '../services/filiere.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  providers: [StudentService]
})
export class AddStudentComponent implements OnInit {
  formData: any;
  filieres: any[] = [];
  selectedFiliereId: number  = 1;

  myStudent: Student = {
    cne: '',
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    gender: '',
    date_of_birth: '',
    password: ''
  }

  students: Student[] = [];
  addStudentForm: FormGroup;
  



  constructor(private filiereService: FiliereService,private studentService: StudentService, private toastr: ToastrService) {
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
      confirmPassword: new FormControl('', [
        Validators.required,
        this.matchPassword.bind(this)
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
      ])
      
    });
    
  }
  

  ngOnInit() {
    this.loadFilieres();
  }

  loadFilieres() {
    this.filiereService.getFilieres().subscribe(
      (filieres: any[]) => {
        this.filieres = filieres;
        console.log('hi');
        console.log(filieres);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  matchPassword(control: AbstractControl): { [key: string]: any } | null {
    const PasswordAccount = control.parent?.get('PasswordAccount');
    const confirmPassword = control;

    if (PasswordAccount?.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
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

  get confirmPassword() {
    return this.addStudentForm.get('confirmPassword');
  }

  get email() {
    return this.addStudentForm.get('email');
  }
  addStudent(student: Student) {
  
    this.studentService.addStudent(student,this.selectedFiliereId).subscribe(students => {
      this.toastr.success('Student added successfully');
    }, error => {
      this.toastr.error('error');
     
    });
  }


  onFiliereChange(event: any) {
    this.selectedFiliereId = event.target.value;
  }
  onSubmit(): any {
    this.formData = this.addStudentForm.value;
    
    let student: Student;
    student = {
      cne: this.formData?.codeApogee,
      firstname: this.formData?.firstname,
      lastname: this.formData?.lastname,
      phone: this.formData?.mobileNumber,
      email: this.formData?.email,
      gender: this.formData?.gender == 'Male' ? 'MALE' : 'FEMALE',
      password: this.formData?.PasswordAccount,
      date_of_birth: this.formData?.dob
    }
    let x = this.addStudent(student);

  }
}
