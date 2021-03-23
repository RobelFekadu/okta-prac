import { CreateUserDto } from './dto/create-user.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import oktaClient from './lib/oktaClient';

@Injectable()
export class UserService {
  constructor() {}

  async createUser(createUserDto: CreateUserDto) {
    const newUser = {
      profile: {
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        email: createUserDto.email,
        login: createUserDto.email,
      },
      credentials: {
        password: {
          value: createUserDto.password,
        },
      },
    };

    try {
      const user = await oktaClient.createUser(newUser);
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
