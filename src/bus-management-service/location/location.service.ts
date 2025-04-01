import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class LocationService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly client: ClientProxy,
  ) {}
  async getProvinces() {
    return this.client.send('get_provinces', {});
  }

  async getDistricts(provinceCode: number) {
    return this.client.send('get_districts', { provinceCode });
  }

  async getWards(districtCode: number) {
    return this.client.send('get_wards', { districtCode });
  }
}
