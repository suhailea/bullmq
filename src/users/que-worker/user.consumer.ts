import {
  OnQueueActive,
  OnQueueCompleted,
  Process,
  Processor,
} from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

const user = [];

@Processor('Add-user')
export class UserConsumer {
  private readonly logger = new Logger(UserConsumer.name);

  @Process()
  async addUser(job: Job<unknown>) {
    setTimeout(() => {
      this.logger.log(`Adding user data ${JSON.stringify(job)}`);
      user.push(job.data);
    }, 5000);
  }

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.log(`Processing job ${job.id}`);
  }

  @OnQueueCompleted()
  onCompleted(job: Job) {
    this.logger.log(`Completed Processing job ${job.id}`);
  }
}
