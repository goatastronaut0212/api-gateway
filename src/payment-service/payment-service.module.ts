import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { PaymentController } from "./payment/payment.controller";
import { PaymentService } from "./payment/payment.service";
import { VnpayController } from "./vnpay/vnpay.controller";
import { VnpayService } from "./vnpay/vnpay.service";

@Module({
  imports: [
      ClientsModule.register([
        {
          name: 'PAYMENT_SERVICE',
          transport: Transport.TCP,
          options: { host: '127.0.0.1', port: 4003 },
        },
      ]),
    ],
    controllers: [PaymentController, VnpayController],
    providers: [PaymentService, VnpayService],
})
export class PaymentServiceModule {}