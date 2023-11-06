import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {PrismaService} from "../prisma.service";
import {AuthModule} from "../auth/auth.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  imports: [AuthModule]
})
export class UsersModule {}
