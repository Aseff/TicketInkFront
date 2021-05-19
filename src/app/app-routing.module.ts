import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login/login.component';
import { CountryComponent } from './pages/Country/country/country.component';
import { UserComponent } from './pages/User/user/user.component';
import { MovieComponent } from './pages/Movie/movie/movie.component';

import { CinemaComponent } from './pages/Cinemas/cinema/cinema.component';
import { BookingComponent } from './pages/Booking/booking/booking.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { AuthGuard } from './pages/login/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule), canActivate:[AuthGuard]},
  // { path: 'user', component:UserComponent},
  // { path: 'movie',component:MovieComponent,canActivate:[AuthGuard]},
  // { path: 'cinema', component:CinemaComponent,canActivate:[AuthGuard]},
  // { path: 'booking', component:BookingComponent,canActivate:[AuthGuard]},
  // { path :'country' , component:CountryComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent}
 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

export const routingComponents=[LoginComponent];
