import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('v2/office')
export class OfficeController {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly office: ClientProxy,
  ) {}
  @Post('/create-office')
  createOffice(@Body() data: any) {
    console.log('Sending request to Bus Management Service:', data);
    return this.office.send('create_office', data);
  }
}
