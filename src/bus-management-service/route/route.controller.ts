import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RouteService } from './route.service';

@Controller('v2/route')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Post('create-route')
  createRoute(@Body() data: any) {
    console.log('Sending request to Service:', data);
    return this.routeService.createRoute(data);
  }
  @Put('update-route/:id')
  updateRoute(@Param('id') id: number, @Body() data: any) {
    console.log('Sending request to Service:', data);
    return this.routeService.updateRoute(id, data);
  }
  @Delete('delete-route/:id')
  deleteRoute(@Param('id') id: number) {
    console.log('Sending request to Service:', id);
    return this.routeService.deleteRoute(id);
  }
  @Get('get-route-by-company/:id')
  getRoute(@Param('id') id: number) {
    console.log('Sending request to Service:', id);
    return this.routeService.getRoute(id);
  }
  @Get('get-routes-name-by-company/:id')
  getRouteName(@Param('id') id: number) {
    console.log('Sending request to Service:', id);
    return this.routeService.getRouteName(id);
  }

  @Put('move-top-route/:id')
  moveTopRoute(@Param('id') id: number) {
    console.log('Sending request to Service:', id);
    return this.routeService.moveTopRoute(id);
  }

  @Post('/create-route-popular')
  createRoutePopular(@Body() data: any) {
    return this.routeService.createRoutePopular(data);
  }

  @Get('/get-list-route-popular')
  getListRoutePopular() {
    return this.routeService.getListRoutePopular();
  }

  @Put('/update-route-popular/:id')
  updateRoutePopular(@Param('id') id: number, @Body() data: any) {
    return this.routeService.updateRoutePopular(id, data);
  }
  @Delete('/delete-route-popular/:id')
  deleteRoutePopular(@Param('id') id: number) {
    return this.routeService.deleteRoutePopular(id);
  }
}
