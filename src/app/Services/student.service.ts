import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:8080/students';

  constructor(private http: HttpClient) { }

  getAllStudents() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getStudentById(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addStudent(student: any) {
    return this.http.post<any>(this.apiUrl, student);
  }

  editStudent(id: string, updates: any) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, updates);
  }

  deleteStudent(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
