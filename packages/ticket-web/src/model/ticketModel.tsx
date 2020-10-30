
import { SeatModel } from "./seatModel";

export interface TicketModel extends SeatModel{
  movie:string,
  date:string,
  hall:string,
  code: string
}