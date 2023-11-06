import {Controller, Get, Put, UseGuards, Request} from '@nestjs/common';
import { CompletedTestsService } from './completed-tests.service';
import {AuthGuard} from "../auth/auth.guard";
import {CreateCompletedTestDto} from "./dto/createCompletedTest.dto";

@Controller('completed-tests')
export class CompletedTestsController {
  constructor(private readonly completedTestsService: CompletedTestsService) {}

  @UseGuards(AuthGuard)
  @Get()
  getCompletedTests(@Request() req) {
    const userId = req.userId;
    return this.completedTestsService.getAllCompletedTests(userId);
  }

  @UseGuards(AuthGuard)
  @Put()
  createCompletedTest(@Request() req, dto: CreateCompletedTestDto) {
    const userId = req.userId;
    return this.completedTestsService
  }
}
