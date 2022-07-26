import { Injectable } from '@angular/core';

const user_token = '';
const user_type = '';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(user_token);
    window.sessionStorage.setItem(user_token, token);
  }

  public getToken(): any {
    return sessionStorage.getItem(user_token);
  }

  public saveType(type: string): void {
    window.sessionStorage.removeItem(user_type);
    window.sessionStorage.setItem(user_type, type);
  }

  public getType(): any {
    return sessionStorage.getItem(user_type);
  }
}
