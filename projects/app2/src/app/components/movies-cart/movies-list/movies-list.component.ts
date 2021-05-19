import { Movie } from './../../../../../../../src/app/pages/Movie/movie/movie';
import { Component, OnInit } from '@angular/core';
import {MovieService} from './../../../../../../../src/app/pages/Movie/movie/movie.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  public movies: Movie[];

 // constructor(private movieService : MovieService ) { }
  constructor( ) { }

  
  ngOnInit(): void {
    // this.getMovies();
  }
  // public getMovies(): void{
  //   this.movieService.getMovies().subscribe((response:Movie[]) => {
  //        this.movies=response;
        
  //    },
  //    (error: HttpErrorResponse)=>{
  //      alert(error.message);
  //    }
  //   );
  // }
  
}
