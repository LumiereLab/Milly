import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { AppService } from './tickets.service';
import { CreateTicketDto } from './dto/createTicket.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tickets')
  getTIckets() {
    return this.appService.getTickets();
  }

  @Post('tickets/')
  storeTicket(@Body() data: CreateTicketDto) {
    return this.appService.storeTicket(data);
  }
  @Delete('/tickets/:id')
  deleteTicket(@Param('id') id: string) {
    return this.appService.deleteTicket(Number(id));
  }
}
