import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', Validators.required],
      dob: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/), this.dobValidator]],
      email: ['', [Validators.required, Validators.pattern(/^\w+_\w+@um5\.ac\.ma$/)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      codeApogee: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
      PasswordAccount: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*\W).+$/)]]
    });
  }
  dobValidator(control: FormControl) {
    const selectedDate = new Date(control.value);
    const today = new Date();
    if (selectedDate > today) {
      return { futureDate: true };
    }
    return null;
  }
  onSubmit(formElement: any) {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}
