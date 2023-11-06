import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';
import {AuthModule} from "../auth/auth.module";
import {PrismaService} from "../prisma.service";

@Module({
  controllers: [TestsController],
  providers: [TestsService, PrismaService],
  imports: [AuthModule]
})
export class TestsModule {}
