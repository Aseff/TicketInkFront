import { ShowService } from './show.service';
import { Component, OnInit } from '@angular/core';
import { Show} from './show';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public shows: Show[];
  public updateShow:Show;
  public deletedShow:Show;
  constructor(private showService : ShowService) { }

  ngOnInit(): void {
    this.getShows();
  }

  public getShows(): void{
    this.showService.getShows().subscribe((response:Show[]) => {
         this.shows=response;
        

     },
     (error: HttpErrorResponse)=>{
       alert(error.message);
     }
    );
  }
  public onAddShow(addForm: NgForm): void {
    document.getElementById('add-show-form')?.click()
    this.showService.addShow(addForm.value).subscribe(
      (response: Show) => {
        console.log(response);
        this.getShows();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public onOpenModal(show:Show,mode:string) : void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addShowModal');
    }
    if(mode=== 'delete'){
      this.deletedShow=show;
      button.setAttribute('data-target','#deleteShowModal');

    }
    if(mode=== 'edit'){
      this.updateShow=show;
      button.setAttribute('data-target','#editShowModal');
    }
     container?.appendChild(button);
     button.click();

  }

  
  public onUpdateShow(show:Show): void{
      this.showService.updateShow(show).subscribe(
        (response:Show)=>{
          console.log(response);
          this.getShows();
       
          
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      )

  }
 
  public onDeleteShow(showId:number): void{
    this.showService.deleteShow(showId).subscribe(
      (response:void)=>{
        console.log(response);
        this.getShows();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )

}
  //store all of Show that match this key either name or description match
  //if it equals -1 it means not found
  // 2.if we check for reseting  



}
