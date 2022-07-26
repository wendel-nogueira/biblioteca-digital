import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const api = 'http://localhost:3000/api/';


@Injectable({
  providedIn: 'root'
})
export class ExemplaryService {

  constructor(private http: HttpClient, private token: TokenStorageService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token.getToken()
    })
  };

  getExemplaries(): Observable<any> {
    return this.http.get(api + 'exemplar', this.httpOptions);
  }

  getExemplary(id: number): Observable<any> {
    return this.http.get(api + 'exemplar/' + id, this.httpOptions);
  }

  addExemplary(exemplary: any): Observable<any> {
    return this.http.post(api + 'exemplar', exemplary, this.httpOptions);
  }

  updateExemplary(id: number, exemplary: any): Observable<any> {
    return this.http.patch(api + 'exemplar/' + id, exemplary, this.httpOptions);
  }

  deleteExemplary(id: number): Observable<any> {
    return this.http.delete(api + 'exemplar/' + id, this.httpOptions);
  }
}
