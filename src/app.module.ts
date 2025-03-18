import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ACCOUNT_SERVICE',
        transport: Transport.TCP,
        options: { host: '127.0.0.1', port: 4001 },
      },
    ]),
    AccountModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
