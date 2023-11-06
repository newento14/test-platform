import {Body, Controller, Get, Param, Post, Put, Request, UseGuards} from '@nestjs/common';
import {TestsService} from './tests.service';
import {AuthGuard} from "../auth/auth.guard";
import {CreateTestDto} from "./dto/createTest.dto";
import {UpdateTestDto} from "./dto/updateTest.dto";

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {
  }

  @UseGuards(AuthGuard)
  @Post()
  createTest(@Request() req, @Body() dto: CreateTestDto) {
    const userId = req.userId;
    return this.testsService.createTest(dto, userId)
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  updateTest(@Request() req, @Param('id') id, @Body() dto: UpdateTestDto) {
    const userId = req.userId;
    return this.testsService.updateTest(dto, userId);
  }

  @UseGuards(AuthGuard)
  @Get()
  getAllUserTests(@Request() req) {
    const userId = req.userId;
    return this.testsService.getAllUserTests(userId);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  getTestById(@Param('id') id) {
    // TODO: get all questions
    return this.testsService.getTestById(parseInt(id));
  }
}
