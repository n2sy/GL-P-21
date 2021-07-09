import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  link = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  Register(identifiants) {
    return this.http.post(`${this.link}/register`, identifiants);
  }

  login(identifiants) {
    return this.http.post(`${this.link}/login`, identifiants);
  }

  isLogged() {
    let token = localStorage.getItem('mytoken');
    if (token) return true;
    else return false;
  }

  logout() {
    localStorage.removeItem('mytoken');
  }
}
