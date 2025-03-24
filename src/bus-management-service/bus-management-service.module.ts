import { ClientsModule, Transport } from '@nestjs/microservices';
import { CompanyController } from './company/company.controller';
import { Module } from '@nestjs/common';
import { OfficeController } from './office/office.controller';
import { CompanyService } from './company/company.service';
import { OfficeService } from './office/office.service';

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
  providers: [CompanyService, OfficeService],
})
export class BusManagementServiceModule {}
