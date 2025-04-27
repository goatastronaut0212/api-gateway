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

  async callbackZaloPay(data: any) {
    return this.client.send('callback_zalopay', data);
  }

  async checkPayment(data: any) {
    return this.client.send('check_payment', data);
  }
}
