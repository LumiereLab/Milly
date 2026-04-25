import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTicketDto } from './dto/createTicket.dto';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getTickets() {
    return this.prisma.ticket.findMany();
  }

  async storeTicket(data: CreateTicketDto) {
    return this.prisma.ticket.create({
      data,
    });
  }
}
