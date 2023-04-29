import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students = [
    {
      "CNE": "179198765567",
      "Name": "AHMED ROUBALE",
      "Class": "10",
      "Gender": "MALE",
      "Subject": "MACHINE LEARNING",
      "Section": "A",
      "Mobile Number": "0628201023",
      "Email": "Ahmed.roubale@gmail.com"
    },
    {
      "CNE": "199098765567",
      "Name": "FATIMA ZAHRA",
      "Class": "11",
      "Gender": "FEMALE",
      "Subject": "BIOLOGY",
      "Section": "B",
      "Mobile Number": "0627508943",
      "Email": "fatima.zahra@gmail.com"
    },
    {
      "CNE": "169098765567",
      "Name": "SAID EL MAHDI",
      "Class": "12",
      "Gender": "MALE",
      "Subject": "PHYSICS",
      "Section": "C",
      "Mobile Number": "0624309258",
      "Email": "said.elmahdi@gmail.com"
    },
    {
      "CNE": "179098565567",
      "Name": "SARA MOUSSAOUI",
      "Class": "10",
      "Gender": "FEMALE",
      "Subject": "CHEMISTRY",
      "Section": "A",
      "Mobile Number": "0623100967",
      "Email": "aaa.moussaoui@gmail.com"
    },
    {
      "CNE": "179598765567",
      "Name": "YASSINE EL KABBAJ",
      "Class": "11",
      "Gender": "MALE",
      "Subject": "ENGLISH",
      "Section": "B",
      "Mobile Number": "0628974305",
      "Email": "yassine.elkabbaj@gmail.com"
    }
  ];
  constructor() {
    console.log(this.students);
  }
}
