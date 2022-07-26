import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const api = 'http://localhost:3000/api/';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient, private token: TokenStorageService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token.getToken()
    })
  };

  getEmployees(): Observable<any> {
    return this.http.get(api + 'funcionario', this.httpOptions);
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(api + 'funcionario/' + id, this.httpOptions);
  }

  addEmployee(employee: any): Observable<any> {
    return this.http.post(api + 'funcionario', employee, this.httpOptions);
  }

  updateEmployee(id: number, employee: any): Observable<any> {
    return this.http.patch(api + 'funcionario/' + id, employee, this.httpOptions);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(api + 'funcionario/' + id, this.httpOptions);
  }
}
