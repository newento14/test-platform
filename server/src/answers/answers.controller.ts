import {Body, Controller, Delete, Get, Param, Post, Request, UseGuards} from '@nestjs/common';
import { AnswersService } from './answers.service';
import {AuthGuard} from "../auth/auth.guard";
import {CreateAnswerDto} from "./dto/createAnswer.dto";

@Controller('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @UseGuards(AuthGuard)
  @Post(':questionId')
  createAnswer(@Request() req, @Param('questionId') questionId, @Body() dto: CreateAnswerDto) {
    return this.answersService.createAnswer(dto)
  }

  @UseGuards(AuthGuard)
  @Delete(':answerId')
  deleteAnswer(@Request() req, @Param('answerId') answerId) {
    return this.answersService.deleteAnswer(answerId);
  }
}
