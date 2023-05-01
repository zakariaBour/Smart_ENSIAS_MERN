import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Teacher } from '../models/teacher';
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
export class TeacherService {

  private apiUrl = 'http://localhost:8080/';
  readonly endPointStudents = '/teachers'

  constructor(private http: HttpClient) {
  }
  getTeachers() {
    return this.http.get(this.apiUrl + this.endPointStudents, httpOptions);
  }
  deleteTeacher(cin: string) {
    return this.http.delete(this.apiUrl + this.endPointStudents + "/" + cin);
  }
  addTeacher(teacher: Teacher): Observable<Teacher> {
    let addTeacherUrl = this.apiUrl + this.endPointStudents + "/enrollTeacher";
    return this.http.post<Teacher>(addTeacherUrl, teacher, httpOptions);
  }
  findTeacherByCin(cin: string) {
    return this.http.get(this.apiUrl + this.endPointStudents + "/" + cin, httpOptions);
  }
}
