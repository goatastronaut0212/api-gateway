import { BusManagementServiceModule } from './bus-management-service/bus-management-service.module';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ACCOUNT_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 4001 },
      },
      {
        name: 'BUS_MANAGEMENT_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 4002 },
      },
    ]),
    BusManagementServiceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
