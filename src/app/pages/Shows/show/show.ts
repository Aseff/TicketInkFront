import { Movie } from './../../Movie/movie/movie';
import { Cinema } from './../../Cinemas/cinema/cinema';


export class Show {
    showId: number;
    show_date:Date;
    start_time: Date;
    end_time: Date;
    movie_id: Movie;
    cinema_id: Cinema;
   
}
