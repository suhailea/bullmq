import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { BullModule } from '@nestjs/bull';
import { UserConsumer } from './consumers/user.consumer';

@Module({
  imports: [
    // Register the Que system
    BullModule.registerQueue({
      name: 'Add-user',
    }),
  ],
  providers: [UserService, UserConsumer],
  controllers: [UserController],
})
export class UserModule {}
