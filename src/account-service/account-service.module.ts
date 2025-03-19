import { Module } from '@nestjs/common';
import { AccountServiceController } from './account-service.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ACCOUNT_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 4001 },
      },
    ]),
  ],
  controllers: [AccountServiceController],
  providers: [],
})
export class AccountServiceModule {}
