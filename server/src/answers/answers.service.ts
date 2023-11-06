import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {CreateAnswerDto} from "./dto/createAnswer.dto";

@Injectable()
export class AnswersService {

  constructor(private prisma: PrismaService) {}

  async createAnswer(dto: CreateAnswerDto) {
    const answer = await this.prisma.answer.create({data: dto});
    return answer;
  }

  async deleteAnswer(answerId: number) {
    const answer = await this.prisma.answer.delete({where: {id: answerId}});
    return answer;
  }

}
