import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../services/holiday.service';
import { saveAs } from 'file-saver';
import { SearchService } from '../search.service';
import { ToastrService } from 'ngx-toastr';
import { BranchService } from '../services/branch.service';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})

export class BranchListComponent implements OnInit {
  Branchs: any;
  role : any;
  constructor(private branchService: BranchService
    , private toastr: ToastrService, public searchService: SearchService) {
    console.log(this.branchService.getBranchs().subscribe((data) => { console.log(data) }))
  }

  ngOnInit(): void {
    this.branchService.getBranchs().subscribe((data) => {
      this.Branchs = data;
    })
    this.getCurrentUserRole();
  }
  getBranchs(): void {
    this.branchService.getBranchs().subscribe(branchs => {
      this.Branchs = branchs;
    });
  }
  
  getCurrentUserRole(){
    this.role = localStorage.getItem('role');
  }

  // downloadStudents(): void {
  //   this.holidayService.getHolidays().subscribe(holidays => {
  //     this.holidays = holidays;
  //     const data = this.generateCsvData(this.holidays);
  //     const blob = new Blob([data], { type: 'text/csv;charset=utf-8' });
  //     saveAs(blob, 'holidays.csv');

  //   });
  // }

  // generateCsvData(holidays: Holiday[]): string {
  //   const headers = ['ID', 'TITLE', 'TYPE', 'START DATE', 'END DATE'];
  //   const rows = holidays.map(holiday => {
  //     const row = [holiday.id, holiday.title, holiday.type, holiday.start_date, holiday.end_date];
  //     return row.join(',');
  //   });
  //   return [headers.join(','), ...rows].join('\n');
  // }

}
