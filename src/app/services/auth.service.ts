import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/auth'; // URL de ton backend NestJS

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<any> {
    console.log("am i here")
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  register(userData: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }
}
