import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { VnpayService } from './vnpay.service';

@Controller('v3/vnpay')
export class VnpayController {
  constructor(private readonly vnpayService: VnpayService) {}

  @Post('/create')
  async createPayment(@Body() body: { amount: number; orderId: string }) {
    return this.vnpayService.createPaymentUrl(body);
  }

  @Get('vnpay/return')
  async handleReturn(@Query() query: any) {
    return this.vnpayService.handlePaymentReturn(query);
  }
}
