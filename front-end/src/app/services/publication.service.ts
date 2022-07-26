import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const api = 'http://localhost:3000/api/';


@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient, private token: TokenStorageService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token.getToken()
    })
  };

  getPublications(): Observable<any> {
    return this.http.get(api + 'publicacao', this.httpOptions);
  }

  getPublication(id: number): Observable<any> {
    return this.http.get(api + 'publicacao/' + id, this.httpOptions);
  }

  addPublication(publication: any): Observable<any> {
    return this.http.post(api + 'publicacao', publication, this.httpOptions);
  }

  updatePublication(id: number, publication: any): Observable<any> {
    return this.http.patch(api + 'publicacao/' + id, publication, this.httpOptions);
  }

  deletePublication(id: number): Observable<any> {
    return this.http.delete(api + 'publicacao/' + id, this.httpOptions);
  }
}
