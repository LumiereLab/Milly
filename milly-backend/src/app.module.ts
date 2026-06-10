import { Module } from '@nestjs/common';
import { TicketController } from './tickets/tickets.controller';
import { TicketService } from './tickets/tickets.service';
import { PrismaService } from './prisma/prisma.service';
import { BoardsService } from './boards/boards.service';
import { BoardController } from './boards/boards.controller';

@Module({
  imports: [],
  controllers: [TicketController, BoardController],
  providers: [TicketService, PrismaService, BoardsService],
})
export class AppModule { }
