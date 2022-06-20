import { Controller, Post, Req } from '@nestjs/common';
import { SignUpDTO } from 'src/core/dto/sign-up-dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  signUpUser(@Req() req: SignUpDTO) {}
}
