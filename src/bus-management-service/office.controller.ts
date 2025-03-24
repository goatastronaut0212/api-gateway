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
  @Get('/get-office-by-company/:companyId')
  getOfficesByCompany(@Param('companyId') companyId: any) {
    console.log('Sending request to Bus Management Service:', companyId);
    return this.office.send('get_office_by_company', { companyId });
  }
  @Get('/get-office-name-by-company/:companyId')
  getOfficeNameByCompany(@Param('companyId') companyId: number) {
    return this.office.send('get_office_name_by_company', { companyId });
  }
  @Put('/update-office/:id')
  updateOffice(@Param('id') id: number, @Body() data: any) {
    return this.office.send('update_office', { id, ...data });
  }
  @Delete('/delete-office/:id')
  deleteOffice(@Param('id') id: number) {
    return this.office.send('delete_office', { id });
  }
}
