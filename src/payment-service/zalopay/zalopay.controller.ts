import { Controller, Get, Post } from "@nestjs/common";
import { ZalopayService } from "./zalopay.service";

@Controller("v3/zalopay")
export class ZalopayController {
    constructor(private readonly zalopayService: ZalopayService) {}

    @Get("zalopay")
    async Test(
        
    ) {
        return "2"
    }
}
