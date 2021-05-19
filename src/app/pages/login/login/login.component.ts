import { User } from './../../User/user/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg='';
  user= new User();
 constructor(private loginService: LoginService , private route:Router) { }

 credentials={
   username:'',
   password:''
 }

 ngOnInit(): void {

 }

 public login(){
  console.log("we entered login");

    console.log("we entered if");
    this.loginService.generateToken(this.user).subscribe(
      (response:any)=>{
        console.log(response.token);
         this.route.navigate(['/welcome']);
        this.loginService.loginUser(response.token);
       
      
        
      },
      error=>{
        console.log("exception occured");

        //this.route.navigate(['/**']);
        this.msg="Bad cretenials";
        

      }
    
    )


}
}


