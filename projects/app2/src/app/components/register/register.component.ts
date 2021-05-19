import { registerLocaleData } from '@angular/common';
import { RegisterService } from './register.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { User } from './../../../../../../src/app/pages/User/user/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msg='';
  user=new User();
  constructor(private service:RegisterService, private route:Router) { }

  ngOnInit(): void {
  }

  public register(){
    this.service.registerUserFromRemote(this.user).subscribe(
      data=>{
        this.route.navigate(['/login'])
        this.msg="registration issuccessful";
      },
      error=>{
       console.log("registration failed");
        this.msg=error.error;
        

      }
    )
  }

}
