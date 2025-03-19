import { ClientsModule, Transport } from '@nestjs/microservices';
import { CompanyController } from './company.controller';
import { Module } from '@nestjs/common';
import { OfficeController } from './office.controller';

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
  controllers: [CompanyController, OfficeController],
  providers: [],
})
export class BusManagementServiceModule {}
