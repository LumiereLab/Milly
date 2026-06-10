import { Module } from '@nestjs/common';
import { TicketController } from './tickets/tickets.controller';
import { TicketService } from './tickets/tickets.service';
import { PrismaService } from './prisma/prisma.service';
import { BoardsService } from './boards/boards.service';
import { BoardController } from './boards/boards.controller';
import { CommentService } from './comments/comments.service';
import { Commentcontroller } from './comments/comments.controller';

//TODO: Implement Comments under Tickets
@Module({
  imports: [],
  controllers: [TicketController, BoardController, Commentcontroller],
  providers: [TicketService, PrismaService, BoardsService, CommentService],
})
export class AppModule { }
