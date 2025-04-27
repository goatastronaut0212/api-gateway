import { Body, Controller, Post } from '@nestjs/common';
import { ZalopayService } from './zalopay.service';

@Controller('v3/zalopay')
export class ZalopayController {
  constructor(private readonly zalopayService: ZalopayService) {}

  @Post('create-payment')
  async createPayment(@Body() data: any) {
    return this.zalopayService.createPayment(data);
  }

  @Post('callback')
  async callbackZaloPay(@Body() data: any) {
    return this.zalopayService.callbackZaloPay(data);
  }

  @Post('check-payment')
  async checkPayment(@Body() data: any) {    
    return this.zalopayService.checkPayment(data);
  }
}
