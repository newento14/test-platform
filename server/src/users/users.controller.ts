import {Controller, Get, Post, UseGuards} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from "./dto/createUser.dto";
import {AuthGuard} from "../auth/auth.guard";

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  CreateUser(dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @UseGuards(AuthGuard)
  @Get()
  GetAll() {
    return this.userService.getAll();
  }
}
