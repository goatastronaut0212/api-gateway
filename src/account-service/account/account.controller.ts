import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('v1/account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  // Tạo tài khoản nhân viên BMS
  @Post('/create-account')
  createAccount(@Body() data: any) {
    return this.accountService.createAccount(data);
  }
  @Get('/get-account-info/:id')
  getAccountInfo(@Param('id') id: string) {
    return this.accountService.getAccountInfo(id);
  }

  @Put('/update-account-info/:id')
  updateAccountInfo(@Param('id') id: string, @Body() data: any) {
    return this.accountService.updateAccountInfo(id, data);
  }
  @Put('/update-avatar-account/:id')
  updateAvatarAccount(@Param('id') id: string, @Body() url_avatar: any) {
    return this.accountService.updateAvatarAccount(id, url_avatar);
  }
}
