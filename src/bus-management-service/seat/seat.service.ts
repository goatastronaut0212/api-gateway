import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SeatService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly seat: ClientProxy,
  ) {}
  
  // E7.UC01: Create Seating Chart
  createSeat(data: any) {
    console.log('Sending request to Bus Management Service:', data);
    return this.seat.send('create_seat_map', data);
  }
}
