import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SubjectService } from '../services/subject.service';
import { SearchService } from '../search.service';
import { Subject } from 'rxjs';
import { saveAs } from 'file-saver';

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
   

  downloadSubjects(): void {
    const data = this.generateCsvData(this.Subjects);
    const blob = new Blob([data], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'subjects.csv');
  }
  
  generateCsvData(data: any[]): string {
    // Créer les en-têtes CSV
    const headers = ['Subject Code', 'Name', 'Description', 'Branchs CONCERNED'];
     
    
    // Créer les lignes de données CSV
    const rows = [];
for (let i = 0; i < data.length; i++) {
  const subject = data[i];
  const filiereNames = [];
  for (let j = 0; j < subject.filiere.length; j++) {
    const filiere = subject.filiere[j];
    filiereNames.push(filiere.name);
  }
  const row = [
    subject.code,
    subject.name,
    subject.description,
    filiereNames.join(', ')
  ];
  rows.push(row);
   }

    // Concaténer les en-têtes et les lignes avec les délimiteurs CSV
    const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n');
  
    return csvContent;
  }
  

}

