import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./dto/createUser.dto";
import {PrismaService} from "../prisma.service";
import * as process from "process";

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.prisma.user.create({data: dto})
    return user;
  }

  async getByEmail(email: string) {
    const user = await this.prisma.user.findFirst({where: {email: email}})
    return user;
  }

  async getAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }

}
