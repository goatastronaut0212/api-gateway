import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AccountService {
  constructor(
    @Inject('ACCOUNT_SERVICE') private readonly client: ClientProxy,
  ) {}

  async getUsers() {
    return this.client.send('get_users', {});
  }
}
