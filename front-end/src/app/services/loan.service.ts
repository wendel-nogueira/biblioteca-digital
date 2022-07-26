import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const api = 'http://localhost:3000/api/';


@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient, private token: TokenStorageService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token.getToken()
    })
  };

  getLoans(): Observable<any> {
    return this.http.get(api + 'emprestimo', this.httpOptions);
  }

  getLoan(id: number): Observable<any> {
    return this.http.get(api + 'emprestimo/' + id, this.httpOptions);
  }

  addLoan(loan: any): Observable<any> {
    return this.http.post(api + 'emprestimo', loan, this.httpOptions);
  }

  updateLoan(id: number, loan: any): Observable<any> {
    return this.http.patch(api + 'emprestimo/' + id, loan, this.httpOptions);
  }

  deleteLoan(id: number): Observable<any> {
    return this.http.delete(api + 'emprestimo/' + id, this.httpOptions);
  }
}
