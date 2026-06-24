import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTicketDto } from './dto/createTicket.dto';

@Injectable()
export class TicketService {
  constructor(private readonly prisma: PrismaService) { }

  async getTickets() {
    return this.prisma.ticket.findMany();
  }

  async storeTicket(data: CreateTicketDto) {
    return this.prisma.ticket.create({
      data,
    });
  }

  async deleteTicket(id: number) {
    return this.prisma.ticket.delete({
      where: { id },
    });
  }

}

