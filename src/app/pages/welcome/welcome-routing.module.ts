import { ShowComponent } from '../Shows/show/show.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { UserComponent } from '../User/user/user.component';
import { MovieComponent } from '../Movie/movie/movie.component';
// import { SeatComponent } from '../Seats/seat/seat.component';
// import { ShowtimesComponent } from '../ShowTimes/showtimes/showtimes.component';
import { CinemaComponent } from '../Cinemas/cinema/cinema.component';
import { BookingComponent } from '../Booking/booking/booking.component';
import { AuthGuard } from './../../pages/login/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: 'user',
        component: UserComponent,
        canActivate:[AuthGuard]
      },
      //   {
      //   path: 'Seat',
      //   component: SeatComponent,
      // },
      {
        path: 'cinema',
        component: CinemaComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'booking',
        component: BookingComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'movie',
        component: MovieComponent,
        canActivate:[AuthGuard]
      },
      {
        path: 'show',
        component: ShowComponent,
        canActivate:[AuthGuard]
      }
    ],
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
