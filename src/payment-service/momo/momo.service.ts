import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MomoService {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly client: ClientProxy,
  ) {}

  createMoMoPayment(amount: number, orderInfo: string) {
    return this.client.send('create_momo_payment', { amount, orderInfo });
  }

  momoCallback(query: any) {
    return this.client.send('momo_callback', query);
  }

  momoIpn(body: any) {
    return this.client.send('momo_ipn', body);
  }
}
