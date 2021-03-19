import { UserService } from './pages/User/user/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { hu_HU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import hu from '@angular/common/locales/hu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { UserComponent } from './pages/User/user/user.component';
import { MovieComponent } from './pages/Movie/movie/movie.component';
import { SeatComponent } from './pages/Seats/seat/seat.component';
import { ShowtimesComponent } from './pages/ShowTimes/showtimes/showtimes.component';
import { CinemaComponent } from './pages/Cinemas/cinema/cinema.component';
import { BookingComponent } from './pages/Booking/booking/booking.component';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';



registerLocaleData(hu);
import { LogoutOutline } from '@ant-design/icons-angular/icons';
import { RegistrationComponent } from './pages/Registration/registration/registration.component';
import { CountryComponent } from './pages/Country/country/country.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const icons: IconDefinition[] = [ LogoutOutline];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MovieComponent,
    SeatComponent,
    ShowtimesComponent,
    CinemaComponent,
    BookingComponent,
    RegistrationComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule.forRoot(icons),
    NgbModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: hu_HU },UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
