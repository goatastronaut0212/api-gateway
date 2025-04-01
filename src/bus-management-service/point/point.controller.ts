import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PointService } from './point.service';

@Controller('v2/point')
export class PointController {
  constructor(private readonly pointService: PointService) {}

  @Post('/create-point')
  createPoint(@Body() data: any) {
    console.log('data', data);
    return this.pointService.createPoint(data);
  }
  @Get('/get-points-by-company/:id')
  getPointsByCompany(@Param('id') id: number) {
    console.log('id', id);
    return this.pointService.getPointsByCompany(id);
  }
  @Put('/update-point/:id')
  updatePoint(@Param('id') id: number, @Body() data: any) {
    console.log('id', id);
    console.log('data', data);
    return this.pointService.updatePoint(id, data);
  }
  @Delete('/delete-point/:id')
  deletePoint(@Param('id') id: number) {
    return this.pointService.deletePoint(id);
  }
  @Get('/get-point-name-by-company/:id')
  getPointNameByCompany(@Param('id') id: number) {
    return this.pointService.getPointNameByCompany(id);
  }
}
