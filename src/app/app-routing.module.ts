import { UserComponent } from './pages/User/user/user.component';
import { MovieComponent } from './pages/Movie/movie/movie.component';
import { SeatComponent } from './pages/Seats/seat/seat.component';
import { ShowtimesComponent } from './pages/ShowTimes/showtimes/showtimes.component';
import { CinemaComponent } from './pages/Cinemas/cinema/cinema.component';
import { BookingComponent } from './pages/Booking/booking/booking.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'user', component:UserComponent},
  { path: 'movie',component:MovieComponent},
  { path: 'seat', component:SeatComponent},
  { path: 'cinema', component:CinemaComponent},
  { path: 'booking', component:BookingComponent},
  { path: 'showtimes', component:ShowtimesComponent},
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
