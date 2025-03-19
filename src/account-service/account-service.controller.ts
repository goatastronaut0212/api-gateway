import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('account')
export class AccountServiceController {
  constructor(
    @Inject('ACCOUNT_SERVICE') private readonly client: ClientProxy,
  ) {}
  @Get('/')
  getUsers() {
    return this.client.send('get_users', {});
  }

  @Post('/create-account')
  createAccount(@Body() data: any) {
    console.log('📤 Sending request to Account Service:', data);
    return this.client.send('create_account', data);
  }
}
