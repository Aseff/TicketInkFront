import { UserService } from './pages/User/user/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthInterceptor } from './pages/login/auth.interceptor';
import { AuthGuard } from './pages/login/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { hu_HU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import hu from '@angular/common/locales/hu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { UserComponent } from './pages/User/user/user.component';
import { MovieComponent } from './pages/Movie/movie/movie.component';
import { CinemaComponent } from './pages/Cinemas/cinema/cinema.component';
import { BookingComponent } from './pages/Booking/booking/booking.component';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CountryComponent } from './pages/Country/country/country.component';



registerLocaleData(hu);
import { LogoutOutline } from '@ant-design/icons-angular/icons';
import { RegistrationComponent } from './pages/Registration/registration/registration.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowComponent } from './pages/Shows/show/show.component';
import { LoginComponent } from './pages/login/login/login.component';
import {LoginService} from './pages/login/login.service';
const icons: IconDefinition[] = [ LogoutOutline];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MovieComponent,
    CinemaComponent,
    BookingComponent,
    RegistrationComponent,
    CountryComponent,
    ShowComponent,
    LoginComponent
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
  providers: [LoginService,AuthGuard,[{provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}]],
    bootstrap: [AppComponent]
})
export class AppModule { }
