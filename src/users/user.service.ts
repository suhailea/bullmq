import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class UserService {
  constructor(@InjectQueue('Add-user') private queue: Queue) {}

  public async addQUe(data: any) {
    console.log('INSIDE QUE');

    await this.queue.add({
      ...data,
    });
    return;
  }
}
