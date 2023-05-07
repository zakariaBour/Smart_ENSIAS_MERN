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
export class BranchService {

  readonly apiUrl = 'http://localhost:8080/filiere';
  // readonly endPointBranchs = '/all'
  constructor(private http: HttpClient) { }
  getBranchs() {
    return this.http.get(this.apiUrl, httpOptions);
  }
  addBranch(branch: any): Observable<any> {
    // let addBranchUrl = this.apiUrl + "/add";
    return this.http.post<any>('http://localhost:8080/filiere/add', branch, httpOptions).pipe(
      map(response => {
        console.log(response)
      })
    );
    ;
  }

}

