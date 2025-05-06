import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OfficeService } from './office.service';

@Controller('v2/office')
export class OfficeController {
  constructor(private readonly officeService: OfficeService) {}
  @Post('/create-office')
  createOffice(@Body() data: any) {
    return this.officeService.createOffice(data);
  }
  @Get('/get-offices-by-company/:id')
  getOfficesByCompany(@Param('id') id: any) {
    console.log('id', id);
    return this.officeService.getOfficesByCompany(id);
  }
  @Get('/get-office-name-by-company/:id')
  getOfficeNameByCompany(@Param('id') id: number) {
    return this.officeService.getOfficeNameByCompany(id);
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
