import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
// import { DatabaseService } from '.show./database.service';
import { NgbModalConfig, NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {CinemaCartService} from './../../cinema/cinema-cart/cinema-cart.service';
import {ShowtimesService} from './../../shows/showtimes/showtimes.service';
import  {SharedService} from './../../sharedData/shared.service'
import {SeatService} from './../seat.service';
import {Seat} from './Seat';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css'],
})
export class SeatComponent implements OnInit {
  public movieName="";
  public cinemaName="";
  public showdate="";

  rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  cols: number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  reserved: string[] = ['A2', 'A3', 'F5', 'F1', 'F2','F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4'];
  selected: string[] = [];

  ticketPrice: number = 17;
  convFee: number = 3;
  totalPrice: number = 0;
  currency: string = "USD";
   
  constructor(private router: ActivatedRoute,private routerlink:Router,
    private movie:CinemaCartService,private cinema:ShowtimesService, 
    private shared:SharedService,private seatNumber:SeatService,private price:SeatService) {
  
  }
  ngOnInit(): void {
    this.movieName=this.movie.getMessage();
    this.cinemaName=this.cinema.getMessage();
    this.showdate=this.shared.getMessage();
    

    // this.router.queryParams.subscribe(params => {
    //   this.movieName = params['movieName'];
    // });
    // console.log(this.router.snapshot.params);
    // this.movieName= this.router.snapshot.paramMap.get("movieName") as string;
    // this.cinemaName= this.router.snapshot.paramMap.get("name") as string;

  // // this.data=this.router.snapshot.params.name;
  }

  

 public getStatus(seatPos: string){
        if(this.reserved.indexOf(seatPos) !== -1) {
            return 'reserved';
        } else if(this.selected.indexOf(seatPos) !== -1) {
            return 'selected';
        }
        else{
          return 'There is no seat';
        }
    }
  public clearSelected() {
      this.selected = [];
  }

  //click handler
  public seatClicked(seatPos: string) {
      var index = this.selected.indexOf(seatPos);
      
      if(index !== -1) {
          // seat already selected, remove
          this.selected.splice(index, 1)
      } else {
          //push to selected array only if it is not reserved
          if(this.reserved.indexOf(seatPos) === -1)
              this.selected.push(seatPos);
      }
  }
 
  public showSelected() {
    if(this.selected.length > 0) {
      alert("Selected Seats: " + this.selected + "\nTotal: "+(this.ticketPrice * this.selected.length + this.convFee));
      this.seatNumber.setMessage(this.selected);
      this.price.setPayment(this.ticketPrice * this.selected.length + this.convFee);
      this.routerlink.navigate(['seat','ticket']);

    } else {
      alert("No seats selected!");
    }
   }
  

 
  


}
