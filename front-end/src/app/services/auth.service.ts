import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { Router } from '@angular/router';

const api = 'http://localhost:3000/api/';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private token: TokenStorageService, private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token.getToken()
    })
  };

  login(email: string, password: string): Observable<any>{
    return this.http.post(api + 'autenticar', {
      email: email,
      senha: password
    }, this.httpOptions);
  }

  logout(): void {
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
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

  verifyToken() {
    this.http.get(api + 'funcionario/1', this.httpOptions).subscribe(
      (data: any) => {
      }, (error) => {
        if (error.status === 401) {
          this.logout();
          window.location.reload();
        }
      }
    );
  }
}

