import { RegisterService } from './components/register/register.service';
import { AuthInterceptor } from './components/login/auth.interceptor';
import { AuthGuard } from './components/login/auth.guard';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { MoviesCartComponent } from './components/movies-cart/movies-cart.component';
import { FilterComponent } from './components/movies-cart/filter/filter.component';
import { MoviesListComponent } from './components/movies-cart/movies-list/movies-list.component';
import { CartComponent } from './components/movies-cart/cart/cart.component';
import { CartItemComponent } from './components/movies-cart/cart/cart-item/cart-item.component';
import { MovieItemComponent } from './components/movies-cart/movies-list/movie-item/movie-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { LoginService } from './components/login/login.service';
import { CinemaListComponent } from './components/cinema/cinema-list/cinema-list.component';
import { CinemaItemComponent } from './components/cinema/cinema-list/cinema-item/cinema-item.component';
import { CinemaCartComponent } from './components/cinema/cinema-cart/cinema-cart.component';
import { SeatComponent } from './components/seat/seat/seat.component';
import { ShowtimesComponent } from './components/shows/showtimes/showtimes.component';
import { DayPipe } from './components/pipe/day.pipe';
import { MinutePipe } from './components/pipe/minute.pipe';
import { TicketComponent } from './components/ticket/ticket/ticket.component';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';

//import { CinemaComponent } from './components/cinema/cinema.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MoviesCartComponent,
    FilterComponent,
    MoviesListComponent,
    CartComponent,
    CartItemComponent,
    MovieItemComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    CinemaListComponent,
    CinemaItemComponent,
    CinemaCartComponent,
    SeatComponent,
    ShowtimesComponent,
    DayPipe,
    MinutePipe,
    TicketComponent
      ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule
    
  ],
  providers: [LoginService,RegisterService,AuthGuard,[{provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
