import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TicketService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly client: ClientProxy,
  ) {}

  getTicketByTrip(id: number) {
    console.log('Sending request to Bus Management Service:', id);
    return this.client.send('get_ticket_by_trip', id);
  }
}
