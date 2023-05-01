import { Component } from '@angular/core';
import * as saveAs from 'file-saver';
import { ToastrService } from 'ngx-toastr';
import { TeacherService } from '../Services/teacher.service';
import { SearchService } from '../search.service';
import { Teacher } from '../models/teacher';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css'],
  providers: [TeacherService]

})
export class TeacherListComponent {
  teachers: any;
  constructor(private teacherService: TeacherService
    , private toastr: ToastrService, public searchService: SearchService) { }

  ngOnInit(): void {
    this.teacherService.getTeachers().subscribe((data) => {
      this.teachers = data;
      console.log(this.searchService.searchText)
    })
  }


  deleteTeacher(cin: string) {
    this.teacherService.deleteTeacher(cin).subscribe(() => {
      this.toastr.success('Student deleted successfully');
      this.getTeachers();
    }, error => {
      this.toastr.error("Failed to delete student");
      console.log(error);
    });
  }

  getTeachers(): void {
    this.teacherService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
    });
  }

  downloadTeachers(): void {
    this.teacherService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
      const data = this.generateCsvData(this.teachers);
      const blob = new Blob([data], { type: 'text/csv;charset=utf-8' });
      saveAs(blob, 'teachers.csv');
    });
  }

  generateCsvData(teachers: Teacher[]): string {
    const headers = ['ID', 'CIN', 'Name', 'Phone', 'Email', 'Gender', 'Image URL', 'Date of Birth', 'Password', 'Username', 'Joining Date'];
    const rows = teachers.map(teacher => {
      const row = [teacher.id, teacher.cin, teacher.name, teacher.phone, teacher.gender, teacher.imageUrl, teacher.dob, teacher.password];
      return row.join(',');
    });
    return [headers.join(','), ...rows].join('\n');
  }
}
