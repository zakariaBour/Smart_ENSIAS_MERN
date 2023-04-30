import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // private apiUrl = 'http://localhost:8080/students';


  constructor(private http: HttpClient) { }

  // getAllStudents() {
  //   return this.http.get<any[]>(this.apiUrl);
  // }

  // getStudentById(id: string) {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<any>(url);
  // }
  private api = 'https://d73d-105-158-43-104.ngrok-free.app/students/enrollStudent';

  addStudent(student: Student): Observable<any> {
    return this.http.post<Student>(this.api, student).pipe(
      tap(response => console.log(response))
    );
  }
  // addProduct(product:stu): Observable<any>{
  //   return this.httpClient.post<any>('http://localhost:8080/airbusManagement/addProduct',product,{
  //     headers:new HttpHeaders(
  //       {
  //         'Authorization' : `Bearer ${localStorage.getItem('token')}`
  //       }
  //     )
  //   });
  // }

  // editStudent(id: string, updates: any) {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.put<any>(url, updates);
  // }

  // deleteStudent(id: string) {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete<any>(url);
  // }
}
