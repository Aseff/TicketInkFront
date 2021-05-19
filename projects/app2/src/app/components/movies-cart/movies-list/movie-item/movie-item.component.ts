import { Component, OnInit } from '@angular/core';
import { Movie } from './../../../../../../../../src/app/pages/Movie/movie/movie';
import {MovieService} from './../../../../../../../../src/app/pages/Movie/movie/movie.service';
import {Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import  {SharedService} from './../../../sharedData/shared.service'
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  public movies: Movie[];
  constructor(private movieService : MovieService,private router:Router , private shared :SharedService ) { }
// constructor(){}
  ngOnInit(): void {
     this.getMovies();
     
  }

  

  onSelect(movie:Movie){
       this.shared.setMessage(movie.movieName);
      this.router.navigate(['/movie',movie.movieName,'cinemas'])
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
