import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SeatService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly seat: ClientProxy,
  ) {}
  
  // E7.UC01: Create Seating Chart
  createSeatMap(data: any) {
    console.log('Sending request to Bus Management Service:', data);
    return this.seat.send('create_seat_map', data);
  }
  getSeatMap(id: any) {
    console.log('Sending request to Bus Management Service:', id);
    return this.seat.send('get_seat_map_by_company', id);
  }
  deleteSeatMap(id: number) {
    console.log('Sending request to Bus Management Service:', id);
    return this.seat.send('delete_seat_map', id);
  }
  updateSeatMap(id: number, data: any) {
    console.log('Sending request to Bus Management Service:', data);
    return this.seat.send('update_seat_map', { id, data });
  }
  getSeatMapName(id: number) {
    console.log('Sending request to Bus Management Service:', id);
    return this.seat.send('get_seat_map_name_by_company', id);
  }
}
 