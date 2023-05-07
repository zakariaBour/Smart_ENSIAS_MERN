import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../services/holiday.service';
import { saveAs } from 'file-saver';
import { SearchService } from '../search.service';
import { ToastrService } from 'ngx-toastr';
import { Holiday } from '../models/holiday';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css'],
  providers: [HolidayService]
})
export class HolidayComponent implements OnInit {
  holidays: any;
  constructor(private holidayService: HolidayService
    , private toastr: ToastrService, public searchService: SearchService) {
    console.log(this.holidayService.getHolidays().subscribe((data) => { console.log(data) }))
  }

  ngOnInit(): void {
    this.holidayService.getHolidays().subscribe((data) => {
      this.holidays = data;
    })
  }
  getHolidays(): void {
    this.holidayService.getHolidays().subscribe(holidays => {
      this.holidays = holidays;
    });
  }

  downloadStudents(): void {
    this.holidayService.getHolidays().subscribe(holidays => {
      this.holidays = holidays;
      const data = this.generateCsvData(this.holidays);
      const blob = new Blob([data], { type: 'text/csv;charset=utf-8' });
      saveAs(blob, 'holidays.csv');

    });
  }

  generateCsvData(holidays: Holiday[]): string {
    const headers = ['ID', 'TITLE', 'TYPE', 'START DATE', 'END DATE'];
    const rows = holidays.map(holiday => {
      const row = [holiday.id, holiday.title, holiday.type, holiday.start_date, holiday.end_date];
      return row.join(',');
    });
    return [headers.join(','), ...rows].join('\n');
  }
}
