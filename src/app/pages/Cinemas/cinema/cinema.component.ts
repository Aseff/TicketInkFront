import { CinemaService } from './cinema.service';
import { Component, OnInit } from '@angular/core';
import { Cinema} from './cinema';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  public cinemas: Cinema[];
  public updateCinema:Cinema;
  public deletedCinema:Cinema;
  constructor(private cinemaService : CinemaService) { }

  ngOnInit(): void {
    this.getCinemas();
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
  public onAddCinema(addForm: NgForm): void {
    document.getElementById('add-cinema-form')?.click()
    this.cinemaService.addCinema(addForm.value).subscribe(
      (response: Cinema) => {
        console.log(response);
        this.getCinemas();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public onOpenModal(cinema:Cinema,mode:string) : void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCinemaModal');
    }
    if(mode=== 'delete'){
      this.deletedCinema=cinema;
      button.setAttribute('data-target','#deleteCinemaModal');

    }
    if(mode=== 'edit'){
      this.updateCinema=cinema;
      button.setAttribute('data-target','#editCinemaModal');
    }
     container?.appendChild(button);
     button.click();

  }

  
  public onUpdateCinema(cinema:Cinema): void{
      this.cinemaService.updateCinema(cinema).subscribe(
        (response:Cinema)=>{
          console.log(response);
          this.getCinemas();
         },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      )

  }
 
  public onDeleteCinema(cinemaId:number): void{
    this.cinemaService.deleteCinema(cinemaId).subscribe(
      (response:void)=>{
        console.log(response);
        this.getCinemas();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )

}
  //store all of Cinema that match this key either name or description match
  //if it equals -1 it means not found
  // 2.if we check for reseting  
public searchCinema(key:string):void{
  const result:Cinema[]=[];  
  for(const cinema of this.cinemas ){ 
    if(cinema.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 
    || cinema.address.toLowerCase().indexOf(key.toLowerCase()) !== -1 ){
           result.push(cinema);
       }
    }
    this.cinemas=result;
    if(result.length==0 || !key){
      this.getCinemas();
    }  
    
}



}
