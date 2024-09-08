import { Body, Controller, Post } from '@nestjs/common';
import { User } from './user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('create')
  async create(@Body() user: User): Promise<User> {
    return await this.userService.create(user);
  }
}
