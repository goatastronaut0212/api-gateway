import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RouteService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly route: ClientProxy,
  ) {}

  createRoute(data: any) {
    return this.route.send('create_route', data);
  }
  updateRoute(id: number, data: any) {
    return this.route.send('update_route', { id, data });
  }
  deleteRoute(id: number) {
    return this.route.send('delete_route', id);
  }
  getRoute(id: any) {
    return this.route.send('get_route_by_company', id);
  }
  getRouteName(id: any) {
    return this.route.send('get_route_name_by_company', id);
  }
  moveTopRoute(id: number) {
    return this.route.send('move_top_route', id);
  }

  createRoutePopular(data: any) {
    return this.route.send('create_route_popular', data);
  }

  getListRoutePopular() {
    return this.route.send('get_list_route_popular', {});
  }
}
