import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../services/student.service';
import { saveAs } from 'file-saver';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [StudentService]
})
export class StudentListComponent implements OnInit {
  students: any;
  role: string = "Student";
  constructor(private studentsServices: StudentService
    , private toastr: ToastrService, public searchService: SearchService) {

    this.studentsServices.getStudents().subscribe((data) => { console.log(data) });
  }

  ngOnInit(): void {
    this.studentsServices.getStudents().subscribe((data) => {
      this.students = data;

    })
    this.getCurrentUserRole();
  }

  getCurrentUserRole() {
    //le code a ajouter après
    this.role = "Student";
  }

  deleteStudent(cne: string) {
    this.studentsServices.deleteStudent(cne).subscribe(() => {
      this.toastr.success('Student deleted successfully');
      this.getStudents();
    }, error => {
      this.toastr.error("Failed to delete student");
    });
  }

  getStudents(): void {
    this.studentsServices.getStudents().subscribe(students => {
      this.students = students;
    });
  }

  downloadStudents(): void {
    this.studentsServices.getStudents().subscribe(students => {
      this.students = students;
      const data = this.generateCsvData(this.students);
      const blob = new Blob([data], { type: 'text/csv;charset=utf-8' });
      saveAs(blob, 'students.csv');

    });
  }

  generateCsvData(students: Student[]): string {
    const headers = ['ID', 'CNE', 'First Name', 'Last Name', 'Phone', 'Email', 'Gender', 'Image URL', 'Date of Birth', 'Password'];
    const rows = students.map(student => {
      const row = [student.id, student.cne, student.first_name, student.last_name, student.phone, student.email, student.genre, student.image_url, student.date_of_birth, student.password];
      return row.join(',');
    });
    return [headers.join(','), ...rows].join('\n');
  }

}
