import { Controller } from "@nestjs/common";
import e from "express";
import { PaymentService } from "./payment.service";

@Controller("v3/payment")
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}
    
}