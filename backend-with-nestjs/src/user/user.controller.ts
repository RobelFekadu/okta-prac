import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common';

@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
