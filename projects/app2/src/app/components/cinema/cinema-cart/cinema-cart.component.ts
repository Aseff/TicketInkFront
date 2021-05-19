import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import  {SharedService} from './../../sharedData/shared.service'
import  {CinemaCartService} from './cinema-cart.service'

@Component({
  selector: 'app-cinema-cart',
  templateUrl: './cinema-cart.component.html',
  styleUrls: ['./cinema-cart.component.css']
})

export class CinemaCartComponent implements OnInit {

  public movieName="";
  public pic="";
  constructor(private router: ActivatedRoute,private shared:SharedService,private cinema:CinemaCartService) {

   }

  ngOnInit(): void {
    // this.router.queryParams.subscribe(params => {
    //   this.movieName = params['movieName'];
    // });
    // console.log(this.router.snapshot.params);
    // this.movieName= this.router.snapshot.paramMap.get("movieName") as string;
    this.movieName=this.shared.getMessage();
    
    this.cinema.setMessage(this.movieName);
    // // this.data=this.router.snapshot.params.name;
  }

}
