import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class VnpayService {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly client: ClientProxy,
  ) {}

  createPaymentUrl(data: { amount: number; orderId: string }) {
    console.log('Forwarding to Payment Service:', data);
    return this.client.send('create_payment_url', data);
  }

  handlePaymentReturn(query: any) {
    return this.client.send('handle_payment_return', query);
  }
}
