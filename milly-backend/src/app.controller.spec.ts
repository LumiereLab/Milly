import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './tickets/tickets.controller';
import { TicketService } from './tickets/tickets.service';
import { BoardsService } from './boards/boards.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [TicketService, BoardsService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });
});
