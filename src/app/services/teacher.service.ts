import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  

  readonly apiUrl = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    })
  };
  constructor(private http: HttpClient) { }

  addTeacher(teacher: any): Observable<any> {
    let addTeacherUrl = this.apiUrl + "/api/v1/auth/register/teacher";
    return this.http.post<any>(addTeacherUrl, teacher, this.httpOptions).pipe(
      map(response => {
        console.log(response)
      })
    );
    ;
  }

  getTeachers() {
    return this.http.get(this.apiUrl +"/api/v1/teacher/all" , this.httpOptions);
  }
  deleteTeacher(id: string) {
    return this.http.delete(this.apiUrl  +"/api/v1/teacher/"+id,this.httpOptions);
  }
 
  findTeacherByCne(cne: string) {
    //return this.http.get(this.apiUrl + this.endPointStudents + "/" + cne, httpOptions);
  }
}
