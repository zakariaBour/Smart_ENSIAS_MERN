import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit{
  role : any;
  ngOnInit(): void {
    this.getCurrentUserRole();
  }
  getCurrentUserRole(){
    this.role = localStorage.getItem('role');
  }
}
