import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MomoService {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly client: ClientProxy,
  ) {}

  createPayment(data: any) {
    return this.client.send('create_momo_payment', data);
  }
  checkMomoPayment(data: any) {
    return this.client.send('check_momo_payment', data);
  }
}
