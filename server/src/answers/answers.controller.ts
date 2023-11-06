import {Controller, Get, UseGuards} from '@nestjs/common';
import { AnswersService } from './answers.service';
import {AuthGuard} from "../auth/auth.guard";

@Controller('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @UseGuards(AuthGuard)
  @Get()
  getAnswers() {

  }


}
