import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  LoggedIn=new EventEmitter();
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  generateToken(credentials:any){
    return this.http.post(`${this.apiServerUrl}/auth`,credentials)

  }



  loginUser(token:string) {
    localStorage.setItem('token', token);

    return true;
  }
  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }
  }

  logout(){
    localStorage.removeItem('token');
    return true;
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
