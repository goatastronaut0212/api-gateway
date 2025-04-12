import { Body, Controller, Post } from "@nestjs/common";
import { PaymentService } from "./payment.service";

@Controller("v3/payment")
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

    @Post("/create-payment-url")
    createPaymentUrl(@Body() data: any) {
        return this.paymentService.createPaymentUrl(data);
    }
}