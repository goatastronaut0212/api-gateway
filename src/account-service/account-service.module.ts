import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AccountService } from './account.service';

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
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountServiceModule {}
  