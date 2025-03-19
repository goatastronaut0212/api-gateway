import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('v2/company')
export class CompanyController {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly company: ClientProxy,
  ) {}
  @Post('/create-company')
  createCompany(@Body() data: any) {
    console.log('Sending request to Bus Management Service:', data);
    return this.company.send('create_company', data);
  }
}
