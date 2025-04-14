import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { MomoService } from "./momo.service";

@Controller('v3/momo')
export class MomoController {
  constructor(private readonly momoService: MomoService) {}

  @Post('momo')
  async createMoMoPayment(
    @Body('amount') amount: number,
    @Body('orderInfo') orderInfo: string,
  ) {
    return this.momoService.createMoMoPayment(amount, orderInfo);
  }

  @Get('momo/callback')
  async momoCallback(@Query() query: any) {
    return this.momoService.momoCallback(query);
  }

  @Post('momo/ipn')
  async momoIpn(@Body() body: any) {
    return this.momoService.momoIpn(body);
  }
}