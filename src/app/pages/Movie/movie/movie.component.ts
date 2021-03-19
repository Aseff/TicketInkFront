import { MovieService } from './movie.service';
import { Component, OnInit } from '@angular/core';
import {Movie} from './movie';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movies: Movie[];
  public updateMovie:Movie;
  public deletedMovie:Movie;

  constructor(private movieService : MovieService ) { }

  ngOnInit(): void {
    this.getMovies();
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

  public onOpenModal(movie:Movie,mode:string) : void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode=== 'delete'){
      this.deletedMovie=movie;
      button.setAttribute('data-target','#deleteMovieModal');

    }
    if(mode=== 'edit'){
      this.updateMovie=movie;
      button.setAttribute('data-target','#editMovieModal');
    }
     container?.appendChild(button);
     button.click();

  }

  
  public onUpdateMovie(movie:Movie): void{
      this.movieService.updateMovie(movie).subscribe(
        (response:Movie)=>{
          console.log(response);
          this.getMovies();
       
          
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      )

  }
 
  public onDeleteMovie(movieId:number): void{
    this.movieService.deleteMovie(movieId).subscribe(
      (response:void)=>{
        console.log(response);
        this.getMovies();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )

}
  //store all of Movie that match this key either name or description match
  //if it equals -1 it means not found
  // 2.if we check for reseting  
public searchMovie(key:string):void{
  const result:Movie[]=[];  
  for(const movie of this.movies ){ 
    if(movie.movieName.toLowerCase().indexOf(key.toLowerCase()) !== -1 
    || movie.movieDescription.toLowerCase().indexOf(key.toLowerCase()) !== -1 
    || movie.language.toLowerCase().indexOf(key.toLowerCase()) !== -1 ){
           result.push(movie);
       }
    }
    this.movies=result;
    if(result.length==0 || !key){
      this.getMovies();
    }  
    
}


}
