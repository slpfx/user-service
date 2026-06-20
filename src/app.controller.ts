import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTO } from './DTOs/userDTO';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('create-user')
  createUser(@Body() user: UserDTO) {
    console.log(user);
    return this.appService.createUser(user);
  }
}
