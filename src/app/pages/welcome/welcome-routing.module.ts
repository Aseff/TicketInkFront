import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { UserComponent } from '../User/user/user.component';
import { MovieComponent } from '../Movie/movie/movie.component';
import { SeatComponent } from '../Seats/seat/seat.component';
import { ShowtimesComponent } from '../ShowTimes/showtimes/showtimes.component';
import { CinemaComponent } from '../Cinemas/cinema/cinema.component';
import { BookingComponent } from '../Booking/booking/booking.component';
const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
        {
        path: 'Seat',
        component: SeatComponent,
      },
      {
        path: 'Cinema',
        component: CinemaComponent,
      },
      {
        path: 'Booking',
        component: BookingComponent,
      },
      {
        path: 'Movie',
        component: MovieComponent,
      },
      {
        path: 'ShowTimes',
        component: ShowtimesComponent,
      },
    ],
  },
  {
    path: 'User',
    component: UserComponent,
  },
  {
    path: '',
    redirectTo: 'Welcomenh',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
