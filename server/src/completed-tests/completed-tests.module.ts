import { Module } from '@nestjs/common';
import { CompletedTestsService } from './completed-tests.service';
import { CompletedTestsController } from './completed-tests.controller';
import {AuthModule} from "../auth/auth.module";
import {PrismaService} from "../prisma.service";

@Module({
  controllers: [CompletedTestsController],
  providers: [CompletedTestsService, PrismaService],
  imports: [AuthModule]
})
export class CompletedTestsModule {}
