import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { TeacherService } from '../Services/teacher.service';
import { Teacher } from '../models/teacher';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css'],
  providers: [TeacherService]
})
export class AddTeacherComponent {
  addTeacherForm: FormGroup;
  cinRegx: string = "^[A-Z0-9]{8}$";
  nameRegx: string = "^[A-Za-z\s]{2,50}$";
  mobileRegx: string = "^[0-9]{10}$";
  UsernameRegx: string = "^[A-Za-z\s]{3,50}$";
  emailRegx: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  formData: any;
  myTeacher: Teacher = {
    cin: '',
    name: '',
    phone: '',
    gender: '',
    username: '',
    emailId: '',
    password: ''
  }


  constructor(private teacherService: TeacherService, private toastr: ToastrService) {
    this.addTeacherForm = new FormGroup({
      cin: new FormControl('', [
        Validators.required,
        Validators.pattern(this.cinRegx)
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(this.nameRegx)
      ]),
      gender: new FormControl('', [
        Validators.required
      ]),
      dob: new FormControl('', [
        Validators.required
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern(this.mobileRegx)
      ]),
      JoiningDate: new FormControl('', [
        Validators.required
      ]),
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern(this.UsernameRegx)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailRegx)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        this.matchPassword.bind(this)
      ])

    });

  }

  matchPassword(control: AbstractControl): { [key: string]: any } | null {
    const password = control.parent?.get('password');
    const confirmPassword = control;

    if (password?.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  }


  get cin() {
    return this.addTeacherForm.get('cin');
  }
  get name() {
    return this.addTeacherForm.get('name');
  }
  get gender() {
    return this.addTeacherForm.get('gender');
  }
  get dob() {
    return this.addTeacherForm.get('dob');
  }

  get mobile() {
    return this.addTeacherForm.get('mobile');
  }

  get JoiningDate() {
    return this.addTeacherForm.get('JoiningDate');
  }

  get userName() {
    return this.addTeacherForm.get('userName');
  }

  get email() {
    return this.addTeacherForm.get('email');
  }

  get password() {
    return this.addTeacherForm.get('password');
  }

  get confirmPassword() {
    return this.addTeacherForm.get('confirmPassword');
  }
  addTeacher(teacher: Teacher) {
    this.teacherService.addTeacher(teacher).subscribe(teachers => {
      this.toastr.success('teacher added successfully');
    }, error => {
      this.toastr.error('error');
      console.log(error);
    });
  }
  onSubmit(): any {
    this.formData = this.addTeacherForm.value;
    let teacher: Teacher;
    teacher = {
      cin: this.formData?.cin,
      name: this.formData?.name,
      phone: this.formData?.mobileNumber,
      emailId: this.formData?.email,
      gender: this.formData?.gender,
      username: this.formData?.userName,
      password: this.formData?.password
    }
    console.log(this.formData);
    console.log(teacher);
    this.addTeacher(teacher);
  }
}
