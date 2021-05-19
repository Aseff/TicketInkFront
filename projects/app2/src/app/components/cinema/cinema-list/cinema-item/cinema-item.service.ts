import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cinema } from './../../../../../../../../src/app/pages/Cinemas/cinema/cinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaItemService {
  private apiServerUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  public getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(`${this.apiServerUrl}/cinema/cinemas`);
    
  }
}
