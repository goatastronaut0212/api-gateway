import { Body, Controller, Post } from '@nestjs/common';
import { MomoService } from './momo.service';

@Controller('v3/momo')
export class MomoController {
  constructor(private readonly momoService: MomoService) {}

  @Post('/create-payment')
  async createPayment(@Body() data: any) {
    return this.momoService.createPayment(data);
  }
  @Post('/check-payment')
  async checkMomoPayment(@Body() data: any) {
    return this.momoService.checkMomoPayment(data);
  }
}
