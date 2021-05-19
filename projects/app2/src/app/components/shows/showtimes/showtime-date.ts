import { ShowtimeTime } from './showtime-time';

export interface ShowtimeDate {
  
   date: Date;
  times: (  Date | ShowtimeTime)[];
}