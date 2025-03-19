import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
  @Get('/get-all')
  getAllCompanies() {
    return this.company.send('get_all_companies', {});
  }
  @Put('/update-company/:id')
  updateCompany(@Param('id') id: number, @Body() data: any) {
    return this.company.send('update_company', { id, ...data });
  }
  @Delete('/delete-company/:id')
  deleteCompany(@Param('id') id: number) {
    return this.company.send('delete_company', { id });
  }
  @Put('/lock-company/:id')
  lockCompany(@Param('id') id: number) {
    return this.company.send('lock_company', { id });
  }
  @Put('/unlock-company/:id')
  unlockCompany(@Param('id') id: number) {
    return this.company.send('unlock_company', { id });
  }
}
