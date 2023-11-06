import {Body, Controller, Get, Param, Put, Request} from '@nestjs/common';
import { UserAnswersService } from './user-answers.service';
import {UpdateUserAnswerDto} from "./dto/updateUserAnswer.dto";

@Controller('user-answers')
export class UserAnswersController {
  constructor(private readonly userAnswersService: UserAnswersService) {}

  @Get(':questionId')
  getUserAnswer(@Request() req, @Param('questionId') questionId) {
    const userId = req.userId;
    return this.userAnswersService.getUserAnswerByQuestionId(questionId, userId);
  }

  @Put()
  updateUserAnswer(@Request() req, @Body() dto: UpdateUserAnswerDto) {
    const userId = req.userId;
    return this.userAnswersService.updateUserAnswer(dto, userId);
  }
}
