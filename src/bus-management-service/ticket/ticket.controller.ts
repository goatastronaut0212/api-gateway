import { Controller, Get, Param } from '@nestjs/common';
import { TicketService } from './ticket.service';

@Controller('v2/ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get('get-ticket-by-trip')
  getTicketByTrip(@Param('id') id: number) {
    return this.ticketService.getTicketByTrip(id);
  }
}
