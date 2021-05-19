import { TicketComponent } from './components/ticket/ticket/ticket.component';
import { ShowtimesComponent } from './components/shows/showtimes/showtimes.component';
import { SeatComponent } from './components/seat/seat/seat.component';
import { CinemaCartComponent } from './components/cinema/cinema-cart/cinema-cart.component';
import { CinemaItemComponent } from './components/cinema/cinema-list/cinema-item/cinema-item.component';
import { AuthGuard } from './components/login/auth.guard';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
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
import {CinemaListComponent} from './components/cinema/cinema-list/cinema-list.component'

const routes: Routes = [
{path:'',redirectTo:'/movie',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent,canActivate:[AuthGuard]},
{path:'movie',component:MoviesCartComponent,canActivate:[AuthGuard]},
{path:'movie/:movieName/cinemas',component:CinemaCartComponent,canActivate:[AuthGuard]},
{path:'cinemas/:name/showtimes',component:ShowtimesComponent,canActivate:[AuthGuard]},
{path:'showtimes/:day/:startTime/seat',component:SeatComponent,canActivate:[AuthGuard]},
{path:'seat/ticket',component:TicketComponent,canActivate:[AuthGuard]},

{path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[CinemaCartComponent,MoviesCartComponent];

