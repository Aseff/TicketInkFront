import { CountryService } from './country.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  // public country: Country[];
  constructor(private countryService : CountryService ) { }

  ngOnInit(): void {
   // this.getCountries();
  }
  // public getCountries(): void{
  //   this.countryService.getCountries().subscribe((response:Country[]) => {
  //        this.country=response;
  //    },
  //    (error: HttpErrorResponse)=>{
  //      alert(error.message);
  //    }
  //   );
  // }

}
