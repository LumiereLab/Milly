import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './tickets/tickets.controller';
import { AppService } from './tickets/tickets.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });
});
