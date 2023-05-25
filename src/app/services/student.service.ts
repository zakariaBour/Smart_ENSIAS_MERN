import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // add token from localStorage
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
    return this.http.get(this.apiUrl + this.endPointStudents, httpOptions);
  }
  deleteStudent(cne: string) {
    return this.http.delete(this.apiUrl + this.endPointStudents + "/" + cne, httpOptions);
  }
  addStudent(student: any): Observable<any> {
    let addStudentUrl = this.apiUrl + "/api/v1/auth/register/student";
    return this.http.post<any>(addStudentUrl, student, httpOptions).pipe(
      map(response => {
      
      })
    );
    ;
  }
  findStudentByCne(cne: string) {
    return this.http.get(this.apiUrl + this.endPointStudents + "/" + cne, httpOptions);
  }
  
}
