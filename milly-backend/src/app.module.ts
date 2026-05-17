import { Module } from '@nestjs/common';
import { AppController } from './tickets/tickets.controller';
import { TicketService } from './tickets/tickets.service';
import { PrismaService } from './prisma/prisma.service';
import { BoardsService } from './boards/boards.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [TicketService, PrismaService, BoardsService],
})
export class AppModule {}
