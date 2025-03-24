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
import { OfficeService } from './office.service';

@Controller('v2/office')
export class OfficeController {
  constructor(private readonly officeService: OfficeService) {}
  @Post('/create-office')
  createOffice(@Body() data: any) {
    return this.officeService.createOffice(data);
  }
  @Get('/get-office-by-company/:companyId')
  getOfficesByCompany(@Param('companyId') companyId: any) {
    return this.officeService.getOfficesByCompany(companyId);
  }
  @Get('/get-office-name-by-company/:companyId')
  getOfficeNameByCompany(@Param('companyId') companyId: number) {
    return this.officeService.getOfficeNameByCompany(companyId);
  }
  @Put('/update-office/:id')
  updateOffice(@Param('id') id: number, @Body() data: any) {
    return this.officeService.updateOffice(id, data);
  }
  @Delete('/delete-office/:id')
  deleteOffice(@Param('id') id: number) {
    return this.officeService.deleteOffice(id);
  }
}
