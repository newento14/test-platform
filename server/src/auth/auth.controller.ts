import {Body, Controller, Post} from '@nestjs/common';
import { AuthService } from './auth.service';
import {CreateUserDto} from "../users/dto/createUser.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() dto: CreateUserDto) {
    return this.authService.login(dto)
  }

  @Post('/registration')
  registration(@Body() dto: CreateUserDto) {
    return this.authService.registration(dto)
  }

}
