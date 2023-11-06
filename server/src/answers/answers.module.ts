import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';
import {PrismaService} from "../prisma.service";
import {AuthModule} from "../auth/auth.module";

@Module({
  controllers: [AnswersController],
  providers: [AnswersService, PrismaService],
  imports: [AuthModule]
})
export class AnswersModule {}
