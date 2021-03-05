import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  public users: User[];
  public updateUser:User;
  public deletedUser:User;

  constructor(private userService: UserService ) { }

  ngOnInit(){
    this.getUsers();
  }
  public getUsers(): void{
    this.userService.getUsers().subscribe((response:User[]) => {
         this.users=response;
     },
     (error: HttpErrorResponse)=>{
       alert(error.message);
     }
    );
  }

  public onOpenModal(user:User,mode:string) : void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode=== 'delete'){
      this.deletedUser=user;
      button.setAttribute('data-target','#deleteUserModal');

    }
    if(mode=== 'edit'){
      this.updateUser=user;
      button.setAttribute('data-target','#editUserModal');
    }
     container?.appendChild(button);
     button.click();

  }

  
  public onUpdateUser(user:User): void{
      this.userService.updateUser(user).subscribe(
        (response:User)=>{
          console.log(response);
          this.getUsers();
       
          
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      )

  }
 
  public onDeleteUser(userId:number): void{
    this.userService.deleteUser(userId).subscribe(
      (response:void)=>{
        console.log(response);
        this.getUsers();
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )

}
  //store all of User that match this key either name or email match
  //if it equals -1 it means not found
  // 2.if we check for reseting  
public searchUser(key:string):void{
  const result:User[]=[];  
  for(const user of this.users ){ 
    if(user.firstname.toLowerCase().indexOf(key.toLowerCase()) !== -1 
    || user.lastname.toLowerCase().indexOf(key.toLowerCase()) !== -1 
    || user.email.toLowerCase().indexOf(key.toLowerCase()) !== -1 ){
           result.push(user);
       }
    }
    this.users=result;
    if(result.length==0 || !key){
      this.getUsers();
    }  
    
}




}
