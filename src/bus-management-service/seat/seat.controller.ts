import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { SeatService } from "./seat.service";

@Controller('v2/seat')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  // E7.UC01: Create Seating Chart
  @Post('/create-seat-map')
  createSeatMap(@Body() data: any) {
    return this.seatService.createSeatMap(data);
  }

  @Get('/get-seat-map-by-company/:id')
  getSeatMap(@Param("id") id: any) {
    return this.seatService.getSeatMap(id);
  }
  @Delete('/delete-seat-map/:id')
  deleteSeatMap(@Param("id") id: number) {
    return this.seatService.deleteSeatMap(id);
  }

  @Put('/update-seat-map/:id')
  updateSeat(@Param("id") id: number, @Body() data: any) {
    return this.seatService.updateSeatMap(id, data);
  }
}