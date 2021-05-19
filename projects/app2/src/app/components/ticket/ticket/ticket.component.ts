import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {CinemaCartService} from './../../cinema/cinema-cart/cinema-cart.service';
import {ShowtimesService} from './../../shows/showtimes/showtimes.service';
import  {SharedService} from './../../sharedData/shared.service';
import {SeatService} from './../../seat/seat.service';
import { NgForm } from '@angular/forms';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';


declare var require: any
const FileSaver = require('file-saver');

interface Alert {
  type: string;
  message: string;
}
const ALERTS: Alert[] = [{
  type: 'success',
  message: 'This is an success alert',

}];

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @ViewChild('myForm', {static: true}) myForm: NgForm;




  public movieName="";
  public cinemaName="";
  public showdate="";
  public seatNumber="";
  public price="";
  public name="";


  alerts: Alert[];

  constructor( private movie:CinemaCartService,private cinema:ShowtimesService, 
    private shared:SharedService, private seat:SeatService,private payment:SeatService,private http:HttpClientModule) { }



  @ViewChild('paypalRef',{static:true}) private paypalRef :ElementRef;
  ngOnInit(): void {
    
    window.paypal.Buttons({
     style:{
       layout:'horizontal',
       color:'blue',
       shape:'rect',
       label:'paypal'
     },

      
   createOrder: (data:any, actions:any)=> {
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
         
           purchase_units: [{
            amount: {
              value: '20',
              currency_code:'USD'
            }
          }]
        });
      },
      onApprove: (data:any, actions:any) =>{
        // This function captures the funds from the transaction.
        return actions.order.capture().then((details:any)=>{
          console.log(details);
          //this.shared.setData(details.payer.name.given_name);
          // This function shows a transaction success message to your buyer.
          alert('Transaction completed by ' + details.payer.name.given_name);
          
        });
      },

      onError:(error:any)=>{
        console.log(error);
      }


    }).render(this.paypalRef.nativeElement);
    
    this.movieName=this.movie.getMessage();
    this.cinemaName=this.cinema.getMessage();
    this.showdate=this.shared.getMessage();
    this.seatNumber=this.seat.getMessage();
    this.price=this.payment.getPayment();
    this.name=this.shared.getData();
    
  }

  public text="Payment finished successfully"+"\n"+
  
  "Movie name : "+ this.movie.getMessage()+"\n"+"Cinema name: "+ this.cinema.getMessage()+"\n" +
   "Date & Time : "+ this.shared.getMessage()+"\n"+ "Seat number : "+ this.seat.getMessage()+"\n"+ "Price : "+this.payment.getPayment();
 
   


  onSubmit(){
    this.download();
  }
  download() {
    var file = new Blob([this.text], {type: '.txt'});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, this.myForm.form.value.filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = this.myForm.form.value.fileName;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
  }




  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
