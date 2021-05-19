import { Component, OnInit, Input,SimpleChange, SimpleChanges, OnChanges} from '@angular/core';
import { Movie } from './../../../../../../../src/app/pages/Movie/movie/movie';
import { Cinema } from './../../../../../../../src/app/pages/Cinemas/cinema/cinema';
import { ShowtimesService } from './showtimes.service';
import { Showtime } from './showtime';
import { HttpErrorResponse } from '@angular/common/http';
import {ActivatedRoute,Router} from '@angular/router';
import  {SharedService} from './../../sharedData/shared.service'
import {CinemaCartService} from './../../cinema/cinema-cart/cinema-cart.service'

@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.css']
})
export class ShowtimesComponent implements OnInit {
  public movieName="";
  public cinemaName="";
  public showtimes: Showtime[];

  movies: Movie[];
  cinemas: Cinema[];
  @Input() showAllTimes: boolean;
  @Input() filterDate: string;


  constructor(private db: ShowtimesService,private router: ActivatedRoute,
    private routerlink:Router,private movie:CinemaCartService,
    private shared:SharedService,private cinema:ShowtimesService) { }

  ngOnInit() {
    this.cinemaName=this.shared.getMessage();
    this.movieName=this.movie.getMessage();
    this.cinema.setMessage(this.cinemaName);
    this.shared.setMessage("");
    this.getShowtimes();
    // this.router.queryParams.subscribe(params => {
    //   this.movieName = params['movieName'];
    // });
    // console.log(this.router.snapshot.params);
    // this.movieName= this.router.snapshot.paramMap.get("movieName") as string;
    // this.cinemaName= this.router.snapshot.paramMap.get("name") as string; 
  } 
  onSelectTime(showtime2:Showtime,showtime:Showtime){
      // '/movie',movie.movieName,
      this.shared.setMessage(showtime2.show_date+"/"+showtime.start_time);
      this.routerlink.navigate(['showtimes',showtime2.show_date,showtime.start_time,'seat'])
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['showAllTimes']) {
      this.getShowtimes();
    }
  }
  public getCinemas(): void {
    this.db.getCinemas().subscribe((response:Cinema[]) => {
      this.cinemas=response;
  },
  (error: HttpErrorResponse)=>{
    alert(error.message);
  }
 );
}
public getMovies(): void {
  this.db.getMovies().subscribe((response:Movie[]) => {
    this.movies=response;
},
(error: HttpErrorResponse)=>{
  alert(error.message);
}
);
}
  public getShowtimes(): void {
    this.db.getShowsTimes().subscribe((response:Showtime[]) => {
      this.showtimes=response;
  },
  (error: HttpErrorResponse)=>{
    alert(error.message);
  }
 );
    // this.db.getMovieShowtimes(
    //   this.movie, this.filterDate, this.showAllTimes)
    //   .subscribe(showtimes => this.showtimes = showtimes);
  }

}
