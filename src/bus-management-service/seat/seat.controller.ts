import { Body, Controller, Post } from "@nestjs/common";
import { SeatService } from "./seat.service";

@Controller('v2/seat')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  // E7.UC01: Create Seating Chart
  @Post('/create-seat')
  createSeat(@Body() data: any) {
    return this.seatService.createSeat(data);
  }
}