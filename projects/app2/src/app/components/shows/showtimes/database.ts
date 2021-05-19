import { Showtime } from './showtime';
import { Movie } from './../../../../../../../src/app/pages/Movie/movie/movie';
import { Cinema } from './../../../../../../../src/app/pages/Cinemas/cinema/cinema';

export interface Database {
  movies: Movie[];
  cinemas:Cinema[];
  showtimes: Showtime[];
}
