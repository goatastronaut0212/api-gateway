import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ZalopayService {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly client: ClientProxy,
  ) {}

  async createPayment(data: any) {
    return this.client.send('create_payment', data);
  }
}
