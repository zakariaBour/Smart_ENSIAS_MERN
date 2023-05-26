import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, switchMap } from 'rxjs';

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
  /*addStudent(student: any,id : number): Observable<any> {
    let addStudentUrl = this.apiUrl + "/api/v1/auth/register/student";
    return this.http.post<any>(addStudentUrl, student, httpOptions).pipe(
      map(response => {
      
      })
    );
    ;
  }*/
  addStudent(student: any, filiereId: number): Observable<any> {
    let addStudentUrl = this.apiUrl + "/api/v1/auth/register/student";
    return this.http.post<any>(addStudentUrl, student, httpOptions).pipe(
      switchMap(response => {
        // Récupérer l'ID de l'étudiant ajouté
        const studentId = student.cne;
        // Construire l'URL pour affecter la filière à l'étudiant
        const assignFiliereUrl = this.apiUrl + "/students/" + studentId + "/filiere/" + filiereId;
        // Effectuer la requête pour affecter la filière à l'étudiant
        return this.http.post(assignFiliereUrl, {},httpOptions).pipe(
          map(() => response) 
        );
      })
    );
  }
  
  findStudentByCne(cne: string) {
    return this.http.get(this.apiUrl + this.endPointStudents + "/" + cne, httpOptions);
  }
  
}
