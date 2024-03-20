import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Get()
  getHello(): string {
    return 'HElo';
  }

  /**
   * Add job into Que
   */
  @Post('add-job')
  public async addQue(@Body('input') input: any) {
    return this.service.addQUe(input);
  }
}
