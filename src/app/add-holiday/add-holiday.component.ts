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

}
