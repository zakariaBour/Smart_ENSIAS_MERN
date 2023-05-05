import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HolidayService } from '../services/holiday.service';
import { Holiday } from '../models/holiday';
@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.css'],
  providers: [HolidayService]
})
export class AddHolidayComponent {
  formData: any;
  myHoliday: Holiday = {
    title: '',
    type: '',
    start_date: '',
    end_date: '',
  }
  holidays: Holiday[] = [];
  addHolidayForm: FormGroup;
  constructor(private holidayService: HolidayService, private toastr: ToastrService) {
    this.addHolidayForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      type: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      start_date: new FormControl('', [
        Validators.required,
      ]),
      end_date: new FormControl('', [
        Validators.required,
      ]),
    });
  }
  get title() {
    return this.addHolidayForm.get('title');
  }
  get type() {
    return this.addHolidayForm.get('type');
  }
  get start_date() {
    return this.addHolidayForm.get('start_date');
  }
  get end_date() {
    return this.addHolidayForm.get('end_date');
  }
  addHoliday(holiday: Holiday) {
    console.log(holiday);
    this.holidayService.addHoliday(holiday).subscribe(holidays => {
      this.toastr.success('Holiday added successfully');
    }, error => {
      this.toastr.error('error');
      console.log(error);
    });
  }
  onSubmit(): any {
    this.formData = this.addHolidayForm.value;
    let holiday: Holiday;
    holiday = {
      title: this.formData?.title,
      type: this.formData?.type,
      start_date: this.formData?.start_date,
      end_date: this.formData?.end_date,
    }

    console.log(holiday);
    let x = this.addHoliday(holiday);
    console.log(x);
  }
}
