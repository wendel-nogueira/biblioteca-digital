import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const api = 'http://localhost:3000/api/';


@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  constructor(private http: HttpClient, private token: TokenStorageService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token.getToken()
    })
  };

  getAssociates(): Observable<any> {
    return this.http.get(api + 'associado', this.httpOptions);
  }

  getAssociate(id: number): Observable<any> {
    return this.http.get(api + 'associado/' + id, this.httpOptions);
  }

  addAssociate(associate: any): Observable<any> {
    return this.http.post(api + 'associado', associate, this.httpOptions);
  }

  updateAssociate(id: number, associate: any): Observable<any> {
    return this.http.patch(api + 'associado/' + id, associate, this.httpOptions);
  }

  deleteAssociate(id: number): Observable<any> {
    return this.http.delete(api + 'associado/' + id, this.httpOptions);
  }
}
