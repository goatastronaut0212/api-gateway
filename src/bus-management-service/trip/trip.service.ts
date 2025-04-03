import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TripService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly client: ClientProxy,
  ) {}

  seachTripOnPlatform(data: any) {
    console.log('Sending request to Bus Management Service:', data);
    return this.client.send('search_trip_on_platform', data);
  }
  getTripDetailOnPlatform(id: any) {
    console.log('Sending request to Bus Management Service:', id);
    return this.client.send('get_trip_detail_on_platform', id);
  }
}
