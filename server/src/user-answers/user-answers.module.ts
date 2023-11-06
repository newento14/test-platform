import { Module } from '@nestjs/common';
import { UserAnswersService } from './user-answers.service';
import { UserAnswersController } from './user-answers.controller';
import {PrismaService} from "../prisma.service";
import {AuthModule} from "../auth/auth.module";

@Module({
  controllers: [UserAnswersController],
  providers: [UserAnswersService, PrismaService],
  imports: [AuthModule]
})
export class UserAnswersModule {}
