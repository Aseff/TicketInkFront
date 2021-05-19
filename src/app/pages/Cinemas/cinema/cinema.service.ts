import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cinema } from './cinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(`${this.apiServerUrl}/cinema/cinemas`);
  }

  public addCinema(cinema: Cinema): Observable<Cinema> {
    return this.http.post<Cinema>(`${this.apiServerUrl}/cinema/add`,cinema);
  }

  public updateCinema(cinema: Cinema): Observable<Cinema> {
    return this.http.post<Cinema>(`${this.apiServerUrl}/cinema/update`,cinema);
  }
  public deleteCinema(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/cinema/delete/${id}`);
  }

}
