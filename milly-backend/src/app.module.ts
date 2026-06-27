import { Module } from '@nestjs/common';
import { TicketController } from './tickets/tickets.controller';
import { TicketService } from './tickets/tickets.service';
import { PrismaService } from './prisma/prisma.service';
import { BoardsService } from './boards/boards.service';
import { BoardController } from './boards/boards.controller';
import { CommentService } from './comments/comments.service';
import { Commentcontroller } from './comments/comments.controller';
import { ColumnsController } from './columns/columns.controller';
import { ColumnsService } from './columns/columns.service';

//TODO: Implement Comments under Tickets
@Module({
  imports: [],
  controllers: [TicketController, BoardController, Commentcontroller, ColumnsController],
  providers: [TicketService, PrismaService, BoardsService, CommentService, ColumnsService],
})
export class AppModule { }
