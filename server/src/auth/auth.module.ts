import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {PrismaService} from "../prisma.service";
import {UsersService} from "../users/users.service";
import {JwtModule, JwtService} from "@nestjs/jwt";
import * as process from "process";

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, UsersService],
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY || 'secretKey',
      signOptions: {expiresIn: '12h'}
    })
  ],
  exports: [
    AuthService,
    JwtModule
  ]
})
export class AuthModule {}
