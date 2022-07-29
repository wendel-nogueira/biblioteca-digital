import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';


const api = 'http://localhost:3000/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private token: TokenStorageService, private router: Router) { }

  login(email: string, password: string): Observable<any>{
    return this.http.post(api + 'autenticar', {
      email: email,
      senha: password
    }, httpOptions);
  }

  logout(): void {
    window.sessionStorage.clear();
  }

  verifyLoggedIn() {
    const token = this.token.getToken();

    if (!token) {
      this.router.navigate(['/login']);
    }
  }

  verifyManager() {
    const type = this.token.getType();

    if (type !== 'gerente') {
      this.router.navigate(['/']);
    }
  }
}

