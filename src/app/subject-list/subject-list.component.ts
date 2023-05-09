import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SubjectService } from '../services/subject.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  Subjects: any;
  role: any;
  colors = ['#FFC107', '#2196F3', '#4CAF50'];
  constructor(private subjectService: SubjectService, private toastr: ToastrService, public searchService: SearchService) {
    this.subjectService.getSubjects().subscribe((data: any) => {
      console.log(data)
    });
  }


  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe((data) => {
      this.Subjects = data;
    })
    this.getCurrentUserRole();
  }
  getBranchs(): void {
    this.subjectService.getSubjects().subscribe(data => {
      this.Subjects = data;
    });
  }
  getCurrentUserRole() {
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

