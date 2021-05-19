import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from './show';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(`${this.apiServerUrl}/show/shows`);
  }

  public addShow(show: Show): Observable<Show> {
    return this.http.post<Show>(`${this.apiServerUrl}/show/add`,show);
  }

  public updateShow(show: Show): Observable<Show> {
    return this.http.post<Show>(`${this.apiServerUrl}/show/update`,show);
  }
  public deleteShow(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/show/delete/${id}`);
  }
}
