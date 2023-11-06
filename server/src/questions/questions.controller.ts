import {Body, Controller, Delete, Post, Put, Request, UseGuards} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import {CreateQuestionDto} from "./dto/createQuestion.dto";
import {UpdateQuestionDto} from "./dto/updateQuestion.dto";
import {AuthGuard} from "../auth/auth.guard";

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  createQuestion(@Request() req, @Body() dto: CreateQuestionDto) {
    const userId = req.userId;
    return this.questionsService.createQuestion(dto, userId);
  }

  @UseGuards(AuthGuard)
  @Put()
  updateQuestion(@Request() req, @Body() dto: UpdateQuestionDto) {
    const userId = req.userId;
    return this.questionsService.updateQuestion(dto, userId);
  }

  @UseGuards(AuthGuard)
  @Delete()
  deleteQuestion(@Request() req, @Body() dto: UpdateQuestionDto) {
    const userId = req.userId;
    return this.questionsService.updateQuestion(dto, userId);
  }
}
