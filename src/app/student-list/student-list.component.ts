import { Component, OnInit  } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers : [StudentService]
})
export class StudentListComponent implements OnInit {
  students : any;
  constructor(private studentsServices: StudentService
    , private toastr: ToastrService) {
   
  }

  ngOnInit(): void {
    console.log("on init ...");
    this.studentsServices.getStudents().subscribe((data)=>{
      this.students = data;
      console.log(data);
    })
  }
  getStudents(): void {
    this.studentsServices.getStudents().subscribe(students => {
      this.students = students;
    });
  }

  deleteStudent(cne : string){
    this.studentsServices.deleteStudent(cne).subscribe(()=>{
     this.toastr.success('Student deleted successfully');
     this.getStudents();
    }, error => {
      this.toastr.error("Failed to delete student");
     });
  }

  

  
}
