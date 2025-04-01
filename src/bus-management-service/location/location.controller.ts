import { Controller, Get, Inject, Param, Post, Query } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { LocationService } from "./location.service";

@Controller('v2/location')
export class LocationController {
    constructor(private readonly locationsService: LocationService) {}


  @Get('/provinces')
  async getProvinces() {
    return this.locationsService.getProvinces();
  }

  @Get('/districts')
  async getDistricts(@Query('provinceCode') provinceCode: number) {
    return this.locationsService.getDistricts(provinceCode);
  }

  @Get('/wards')
  async getWards(@Query('districtCode') districtCode: number) {
    return this.locationsService.getWards(districtCode);
  }
}