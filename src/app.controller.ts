import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTO } from './DTOs/userDTO';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('users')
  createUser(@Body() user: UserDTO) {
    return this.appService.createUser(user);
  }
}
