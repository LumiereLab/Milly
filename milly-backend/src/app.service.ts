import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTickets() {
    return [
      { id: 1, title: 'first backend', status: 'open' },
      { id: 2, title: 'second backend', status: 'progressed' },
    ];
  }
}
