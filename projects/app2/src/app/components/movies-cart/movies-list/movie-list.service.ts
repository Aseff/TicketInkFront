import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './../../../../../../../src/app/pages/Movie/movie/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieListService {
   private apiServerUrl = 'http://localhost:8080';

  //  constructor(private http: HttpClient) {}
  constructor(){}
  // public getMovies(): Observable<Movie[]> {
  //   return this.http.get<Movie[]>(`${this.apiServerUrl}/movie/movies`);
  // }
}
