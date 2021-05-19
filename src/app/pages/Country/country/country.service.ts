import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CountryService {
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  // public getCountries(): Observable<Country[]> {
  //   return this.http.get<Country[]>(`${this.apiServerUrl}/movie/movies`);
  // }
}
