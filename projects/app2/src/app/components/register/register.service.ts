import { Injectable,EventEmitter } from '@angular/core';
import {User}  from './../../../../../../src/app/pages/User/user/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiServerUrl = 'http://localhost:8080';
  LoggedIn=new EventEmitter();

  constructor(private http: HttpClient) {}

  public loginUserFromRemote(user:User):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/login`,user);

  }
  public registerUserFromRemote(user:User):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/add`,user);

  }


}
