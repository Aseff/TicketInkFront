import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
    message:string;
  constructor() { }
  setMessage(data:any){
    this.message=data;
  }
  getMessage(){
    return this.message;
  }

  data:string;
 
  setData(data:any){
    this.data=data;
  }
  getData(){
    return this.data;
  }
}
