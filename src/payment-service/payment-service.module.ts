import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PaymentController } from './payment/payment.controller';
import { PaymentService } from './payment/payment.service';
import { VnpayController } from './vnpay/vnpay.controller';
import { VnpayService } from './vnpay/vnpay.service';
import { MomoController } from './momo/momo.controller';
import { MomoService } from './momo/momo.service';
import { ZalopayController } from './zalopay/zalopay.controller';
import { ZalopayService } from './zalopay/zalopay.service';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionService } from './transaction/transaction.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PAYMENT_SERVICE',
        transport: Transport.TCP,
        options: { host: '0.0.0.0', port: 4003 },
      },
    ]),
  ],
  controllers: [
    PaymentController,
    VnpayController,
    MomoController,
    ZalopayController,
    TransactionController,
  ],
  providers: [
    PaymentService,
    VnpayService,
    MomoService,
    ZalopayService,
    TransactionService,
  ],
})
export class PaymentServiceModule {}
