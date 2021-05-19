import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  message:string;
  payment:string;
  constructor() { }
  setMessage(data:any){
    this.message=data;
    
  }
  getMessage(){
    return this.message;
  }
  setPayment(data:any){
    this.payment=data;
    
  }
  getPayment(){
    return this.payment;
  }

}
