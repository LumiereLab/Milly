import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './tickets/tickets.controller';
import { TicketService } from './tickets/tickets.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [TicketService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });
});
 