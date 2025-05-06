import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TransactionService {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly client: ClientProxy,
  ) {}
  getTransactionHistory() {
    return this.client.send('get_transaction_history', {});
  }
}
