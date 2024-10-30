import { UserService } from './user.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    return this.UserService.getAllUser();
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.UserService.createUser(createUser);
  }
}
