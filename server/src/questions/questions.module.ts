import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import {PrismaService} from "../prisma.service";
import {AuthModule} from "../auth/auth.module";
import {TestsService} from "../tests/tests.service";

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService, PrismaService, TestsService],
  imports: [AuthModule]
})
export class QuestionsModule {}
