import {HttpException, HttpStatus, Injectable, Post} from '@nestjs/common';
import {CreateUserDto} from "../users/dto/createUser.dto";
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'
import {User} from "@prisma/client";

@Injectable()
export class AuthService {

  constructor(private userService: UsersService,
              private jwtService: JwtService) {}

  async login(dto: CreateUserDto) {
    const user = await this.userService.getByEmail(dto.email);
    if (!user) {
      throw new HttpException('user with this email does not exist', HttpStatus.NOT_FOUND);
    }
    if (!await bcrypt.compare(dto.password, user.password)) {
      throw new HttpException('bad password', HttpStatus.BAD_REQUEST);
    }
    return this.generateToken(user);
  }

  async registration(dto: CreateUserDto) {
    const userByEmail = await this.userService.getByEmail(dto.email);
    if (userByEmail) {
      throw new HttpException('this email is alredy taken', HttpStatus.BAD_REQUEST);
    }
    const hash = await bcrypt.hash(dto.password, 3);
    const user = await this.userService.createUser({
      email: dto.email,
      password: hash,
    })

    return user;
  }


  private async generateToken(user: User) {
    const payload = {id: user.id};
    return {token: this.jwtService.sign(payload)}
  }
}
