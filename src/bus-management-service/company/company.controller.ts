import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CompanyService } from './company.service';

@Controller('v2/company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}
  @Post('/create-company')
  createCompany(@Body() data: any) {
    console.log('Sending request to Bus Management Service:', data);
    return this.companyService.createCompany(data);
  }
  @Get('/get-all')
  getAllCompanies() {
    return this.companyService.getAllCompanies();
  }
  @Put('/update-company/:id')
  updateCompany(@Param('id') id: number, @Body() data: any) {
    return this.companyService.updateCompany(id, data);
  }
  @Delete('/delete-company/:id')
  deleteCompany(@Param('id') id: number) {
    return this.companyService.deleteCompany(id);
  }
  @Put('/lock-company/:id')
  lockCompany(@Param('id') id: number) {
    console.log('lockCompany', id);
    return this.companyService.lockCompany(id);
  }
  @Put('/unlock-company/:id')
  unlockCompany(@Param('id') id: number) {
    return this.companyService.unlockCompany(id);
  }
  @Post('/create-policy/:id')
  createPolicy(@Param('id') id: number, @Body() data: any) {
    return this.companyService.createPolicy(id, data);
  }
  @Get('/get-policy/:id')
  getPolicy(@Param('id') id: number) {
    return this.companyService.getPolicy(id);
  }
}
