import { Showtime } from './../../../shows/showtimes/showtime';
import { MovieService } from './../../../../../../../../src/app/pages/Movie/movie/movie.service';
import { Component, OnInit,Input } from '@angular/core';
import { Cinema } from './../../../../../../../../src/app/pages/Cinemas/cinema/cinema';
import {CinemaService} from './../../../../../../../../src/app/pages/Cinemas/cinema/cinema.service';
import {Router} from '@angular/router';
import { Movie } from './../../../../../../../../src/app/pages/Movie/movie/movie';
import { ShowtimesService } from './../../../shows/showtimes/showtimes.service';
import  {SharedService} from './../../../sharedData/shared.service'

import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cinema-item',
  templateUrl: './cinema-item.component.html',
  styleUrls: ['./cinema-item.component.css']
})
export class CinemaItemComponent implements OnInit {
   public showAllTimes: boolean[] = [];
  @Input() filterDate: string;
 

  public cinemas: Cinema[];
  public movies: Movie[];

  constructor(private db: ShowtimesService,private cinemaService : CinemaService,private movieService:MovieService,  private router:Router,private shared:SharedService ) { }


  ngOnInit(): void {
     this.getCinemas();
     this.getMovies();
  }
  //  // show all showtimes
  //  showAllShowtimes(movieId: number): void {
  //   this.showAllTimes[movieId] = true;
  // }

  // // hide all showtimes
  // hideAllShowtimes(movieId: number): void {
  //   this.showAllTimes[movieId] = false;
  // }

  onSelectSeat(cinema:Cinema){
    // '/movie',movie.movieName,
    this.shared.setMessage(cinema.name);

      this.router.navigate([ 'cinemas',cinema.name,'showtimes'])
  }

  public getCinemas(): void{
    this.cinemaService.getCinemas().subscribe((response:Cinema[]) => {
         this.cinemas=response;
        
     },
     (error: HttpErrorResponse)=>{
       alert(error.message);
     }
    );
  }
  public getMovies(): void{
    this.movieService.getMovies().subscribe((response:Movie[]) => {
         this.movies=response;
        
     },
     (error: HttpErrorResponse)=>{
       alert(error.message);
     }
    );
  }

}
