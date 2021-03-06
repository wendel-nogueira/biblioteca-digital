import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const api = 'http://localhost:3000/api/';


@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  constructor(private http: HttpClient, private token: TokenStorageService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token.getToken()
    })
  };

  getReserves(): Observable<any> {
    return this.http.get(api + 'reserva', this.httpOptions);
  }

  getReserve(id: number): Observable<any> {
    return this.http.get(api + 'reserva/' + id, this.httpOptions);
  }

  addReserve(reserve: any): Observable<any> {
    return this.http.post(api + 'reserva', reserve, this.httpOptions);
  }

  updateReserve(id: number, reserve: any): Observable<any> {
    return this.http.patch(api + 'reserva/' + id, reserve, this.httpOptions);
  }

  deleteReserve(id: number): Observable<any> {
    return this.http.delete(api + 'reserva/' + id, this.httpOptions);
  }
}
