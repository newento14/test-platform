import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {UpdateUserAnswerDto} from "./dto/updateUserAnswer.dto";

@Injectable()
export class UserAnswersService {
  constructor(private prisma: PrismaService) {}

  async getUserAnswerByQuestionId(questionId: number, userId: number) {
    const userAnswer = await this.prisma.userAnswer.findFirst({
      where: {
        userId: userId,
        answer: {
          questionId: questionId
        }
      }
    });
    return userAnswer;
  }

  async updateUserAnswer(dto: UpdateUserAnswerDto, userId: number) {
    const userAnswer = await this.getUserAnswerByQuestionId(dto.questionId, userId);
    const updated = await this.prisma.userAnswer.update({where: {id: userAnswer.id}, data: {answerId: dto.answerId}});
    return updated;
  }
}
