import { Module } from '@nestjs/common';
import { AppController } from './tickets/tickets.controller';
import { AppService } from './tickets/tickets.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
