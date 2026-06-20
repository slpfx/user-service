import { Injectable } from '@nestjs/common';
import { UserDTO } from './DTOs/userDTO';

@Injectable()
export class AppService {
  createUser(user: UserDTO) {
    return console.log('user created, ', user);
  }
}
