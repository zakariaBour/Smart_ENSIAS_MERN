import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  role : string = "admin";
  teachers = [
    {
      "CIN": "ZT277932",
      "Name": "AHMED ROUBALE",
      "Class": "10",
      "Gender": "MALE",
      "Subject": "MACHINE LEARNING",
      "Section": "A",
      "Mobile Number": "0628201023",
      "Email": "Ahmed.roubale@gmail.com"
    },
    {
      "CIN": "AK465821",
      "Name": "FATIMA ZAHRA",
      "Class": "11",
      "Gender": "FEMALE",
      "Subject": "BIOLOGY",
      "Section": "B",
      "Mobile Number": "0627508943",
      "Email": "fatima.zahra@gmail.com"
    },
    {
      "CIN": "DK764932",
      "Name": "SAID EL MAHDI",
      "Class": "12",
      "Gender": "MALE",
      "Subject": "PHYSICS",
      "Section": "C",
      "Mobile Number": "0624309258",
      "Email": "said.elmahdi@gmail.com"
    },
    {
      "CIN": "FG645391",
      "Name": "SARA MOUSSAOUI",
      "Class": "10",
      "Gender": "FEMALE",
      "Subject": "CHEMISTRY",
      "Section": "A",
      "Mobile Number": "0623100967",
      "Email": "sara.moussaoui@gmail.com"
    },
    {
      "CIN": "HG346198",
      "Name": "YASSINE EL KABBAJ",
      "Class": "11",
      "Gender": "MALE",
      "Subject": "ENGLISH",
      "Section": "B",
      "Mobile Number": "0628974305",
      "Email": "yassine.elkabbaj@gmail.com"
    }
  ];
   constructor(){
    console.log(this.teachers);
   }
  ngOnInit(): void {
     this.getCurrentUserRole();
  }

  getCurrentUserRole(){
    this.role = "Student";
  }
}
