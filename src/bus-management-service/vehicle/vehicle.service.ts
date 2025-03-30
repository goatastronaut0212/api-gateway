import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class VehicleService {
  constructor(
    @Inject('BUS_MANAGEMENT_SERVICE') private readonly vehicle: ClientProxy,
  ) {}
  createVehicle(data: any) {
    console.log('data', data);
    return this.vehicle.send('create_vehicle', data);
  }

  getVehicleByCompany(id: any) {
    return this.vehicle.send('get_vehicle_by_company', id);
  }
  deleteVehicle(id: number) {
    return this.vehicle.send('delete_vehicle', id);
  }
  updateVehicle(id: number, data: any) {
    return this.vehicle.send('update_vehicle', { id, data });
  }
}
