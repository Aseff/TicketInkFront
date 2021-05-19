import { ShowtimeDate } from './showtime-date';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap, concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Movie } from './../../../../../../../src/app/pages/Movie/movie/movie';
import { Cinema } from './../../../../../../../src/app/pages/Cinemas/cinema/cinema';
import { Showtime } from './showtime';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ShowtimesService {
  message:string;
  setMessage(data:any){
    this.message=data;
  }
  getMessage(){
    return this.message;
  }
  private moviesUrl = 'http://localhost:8080';
  private showtimesUrl = 'http://localhost:8080';
  private cinemasUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  public getShowsTimes(): Observable<Showtime[]> {
    return this.http.get<Showtime[]>(`${this.showtimesUrl}/show/shows`);
  }

  
  public getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.moviesUrl}/show/shows`);
  }
  
  public getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(`${this.cinemasUrl}/show/shows`);
  }



  // Get movie showtimes

  // getMovieShowtimes(movie: Movie | number, filterDate: string, showAllTimes: boolean = false): Observable<ShowtimeDate[]> {
  //   let movieId:any;

  //   if (typeof movie === 'object') {
  //     movieId = movie.id;
  //   } if (typeof movie === 'number') {
  //     movieId = movie;
  //   }

  //   //
  //   const date = showAllTimes || filterDate === 'all' ? new Date() : new Date(filterDate);
  //   const next6days = new Date();
  //   date.setHours(0, 0, 0, 0);
  //   next6days.setHours(0, 0, 0, 0);
  //   next6days.setDate(next6days.getDate() + 6);

  //   return this.http.get<Showtime[]>(this.showtimesUrl)
  //     .pipe(
  //       map(showtimes => showtimes.filter(showtime => {
  //         let flag = 0;

  //         showtime.showtimes = showtime.showtimes.filter(showtimesDate => {
  //           const showtimeDate = new Date(showtimesDate.date);
  //           return showAllTimes || filterDate === 'all' && !flag++ ? showtimeDate >= date && showtimeDate <= next6days : showtimeDate.getTime() === date.getTime();
  //         });

  //         return showtime.movieId === movieId;
  //       })),
  //       map(showtimes => showtimes.length ? showtimes[0].showtimes : []),
  //       catchError(this.handleError('getNowPlayingMovies', []))
  //     );
  // }
  
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T>  => {
  //     console.error(error);

  //     return of(result as T);
  //   };
  // }

}
