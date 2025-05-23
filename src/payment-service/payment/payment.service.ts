import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PaymentService {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly client: ClientProxy,
  ) {}

  createPaymentUrl(data: any) {
    console.log('Sending request to Payment Service:', data);
    return this.client.send('create_payment_url', data);
  }
}
