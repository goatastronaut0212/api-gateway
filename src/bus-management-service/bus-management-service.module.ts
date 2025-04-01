import { ClientsModule, Transport } from '@nestjs/microservices';
import { CompanyController } from './company/company.controller';
import { Module } from '@nestjs/common';
import { OfficeController } from './office/office.controller';
import { CompanyService } from './company/company.service';
import { OfficeService } from './office/office.service';
import { RouteController } from './route/route.controller';
import { RouteService } from './route/route.service';
import { SeatController } from './seat/seat.controller';
import { SeatService } from './seat/seat.service';
import { VehicleController } from './vehicle/vehicle.controller';
import { VehicleService } from './vehicle/vehicle.service';
import { ScheduleController } from './schedule/schedule.controller';
import { ScheduleService } from './schedule/schedule.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BUS_MANAGEMENT_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 4002 },
      },
    ]),
  ],
  controllers: [
    CompanyController,
    OfficeController,
    RouteController,
    SeatController,
    VehicleController,
    RouteController,
    ScheduleController,
  ],
  providers: [
    CompanyService,
    OfficeService,
    RouteService,
    SeatService,
    VehicleService,
    RouteService,
    ScheduleService,
  ],
})
export class BusManagementServiceModule {}
