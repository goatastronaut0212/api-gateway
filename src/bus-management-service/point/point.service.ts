import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PointService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly point: ClientProxy,
  ) {}

  createPoint(data: any) {
    return this.point.send('create_point', data);
  }
  getPointsByCompany(id: any) {
    return this.point.send('get_points_by_company', id);
  }
  updatePoint(id: number, data: any) {
    return this.point.send('update_point', { id, data });
  }
  deletePoint(id: number) {
    return this.point.send('delete_point', id);
  }
  getPointNameByCompany(id: number) {
    return this.point.send('get_point_name_by_company', id);
  }
}
