import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Student } from '../models/student';
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};


@Injectable({
  providedIn: 'root'
})
export class StudentService {


  readonly apiUrl = 'http://localhost:8080';
  readonly endPointStudents = '/students'
  constructor(private http: HttpClient) { }
  getStudents() {
    return this.http.get(this.apiUrl+this.endPointStudents, httpOptions);
  }
  deleteStudent(cne:string){
    return this.http.delete(this.apiUrl+this.endPointStudents+"/"+cne);
  }
  addStudent(student : Student) : Observable<Student>{
    let addStudentUrl = this.apiUrl + this.endPointStudents+"/enrollStudent";
    return this.http.post<Student>(addStudentUrl, student,httpOptions);
  }
  findStudentByCne(cne : string){
   return this.http.get(this.apiUrl+this.endPointStudents+"/"+cne,httpOptions);
  }
}
