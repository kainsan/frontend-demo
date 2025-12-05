import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

const BASIC_URL = "http://localhost:5454/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(signupRequest: any): Observable<any> {
    return this.http.post(BASIC_URL + "sign-up", signupRequest);
  }

  login(username: string, password: string): Observable<any> {
    const loginRequest = { username, password };

      return this.http.post(BASIC_URL + "authenticate", loginRequest).pipe(
    tap((response: any) => {
      // Lưu token
      localStorage.setItem('token', response.token);
    })
  );
  }
}
