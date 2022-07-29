import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem('TOKEN');
    window.sessionStorage.setItem('TOKEN', token);
  }

  public getToken(): any {
    return sessionStorage.getItem('TOKEN');
  }

  public saveType(type: string): void {
    window.sessionStorage.removeItem('TYPE');
    window.sessionStorage.setItem('TYPE', type);
  }

  public getType(): any {
    return sessionStorage.getItem('TYPE');
  }
}
