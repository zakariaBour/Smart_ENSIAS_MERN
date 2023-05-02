import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  
  private apiUrl = 'http://localhost:8080/teachers';

  constructor(private http: HttpClient) {
    
   }

  getAllTeachers() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTeacherById(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addTeacher(teacher: any) {
    return this.http.post<any>(this.apiUrl, teacher);
  }

  updateTeacher(id: string, updates: any) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, updates);
  }

  deleteTeacher(id: string) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
