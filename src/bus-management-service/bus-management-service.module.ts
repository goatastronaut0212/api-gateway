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
import { LocationController } from './location/location.controller';
import { LocationService } from './location/location.service';
import { PointController } from './point/point.controller';
import { PointService } from './point/point.service';
import { TripController } from './trip/trip.controller';
import { TripService } from './trip/trip.service';
import { TicketController } from './ticket/ticket.controller';
import { TicketService } from './ticket/ticket.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BUS_MANAGEMENT_SERVICE',
        transport: Transport.TCP,
        options: { host: 'https://api-gateway-perj.onrender.com', port: 4002 },
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
    LocationController, 
    PointController,
    TripController,
    TicketController
  ],
  providers: [
    CompanyService,
    OfficeService,
    RouteService,
    SeatService,
    VehicleService,
    RouteService,
    ScheduleService,
    LocationService, 
    PointService,
    TripService,
    TicketService
  ],
})
export class BusManagementServiceModule {}
