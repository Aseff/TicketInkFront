import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
