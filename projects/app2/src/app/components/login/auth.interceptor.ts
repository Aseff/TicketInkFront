import { RegisterService } from './../register/register.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {LoginService} from './login.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private loginService: LoginService,private registerService:RegisterService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       let newReq=req;
       let token=this.loginService.getToken(); 

       console.log("Bearer ",token);
       if(token!=null){

        newReq= newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}});
           
       }
       return next.handle(newReq);


    }

}