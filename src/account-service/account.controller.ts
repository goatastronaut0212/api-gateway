import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('v1/auth')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}
  @Get('/')
  getUsers() {
    return this.accountService.getUsers();
  }

  @Post('/create-account')
  createAccount(@Body() data: any) {
    return this.accountService.createAccount(data);
  }
  
  @Post('/google-login')
  googleLogin(@Body() data: any) {
    return this.accountService.googleLogin(data);
  }
}
