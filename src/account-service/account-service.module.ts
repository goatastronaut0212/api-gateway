import { Module } from '@nestjs/common';
import { AccountController } from './account/account.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AccountService } from './account/account.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ACCOUNT_SERVICE',
        transport: Transport.TCP,
        options: { host: '0.0.0.0', port: 4001 },
      },
    ]),
  ],
  controllers: [AccountController, AuthController],
  providers: [AccountService, AuthService],
})
export class AccountServiceModule {}
  