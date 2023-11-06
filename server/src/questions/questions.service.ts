import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {CreateQuestionDto} from "./dto/createQuestion.dto";
import {Question} from "@prisma/client";
import {UpdateQuestionDto} from "./dto/updateQuestion.dto";
import {TestsService} from "../tests/tests.service";

@Injectable()
export class QuestionsService {

  constructor(private prisma: PrismaService,
              private testService: TestsService) {}

  async createQuestion(dto: CreateQuestionDto, userId: number) {
    const test = await this.testService.getTestById(dto.testId);
    if (test.userId !== userId) {
      throw new HttpException('access denied', HttpStatus.BAD_REQUEST);
    }

    const question = await this.prisma.question.create({
      data: {
        title: dto.title,
        photo: dto.photo,
        type: dto.type,
        testId: dto.testId
      }
    });

    return question;
  }

  async updateQuestion(dto: UpdateQuestionDto, userId: number) {
    const test = await this.testService.getTestById(dto.testId);
    if (test.userId !== userId) {
      throw new HttpException('access denied', HttpStatus.BAD_REQUEST);
    }

    const question = await this.prisma.question.update({
      where: {
        id: dto.id
      },
      data: {
        title: dto.title,
        photo: dto.photo,
        type: dto.type,
      },
    })

    return question;
  }

  async deleteQuestion(dto: UpdateQuestionDto, userId: number) {
    const test = await this.testService.getTestById(dto.testId);
    if (test.userId !== userId) {
      throw new HttpException('access denied', HttpStatus.BAD_REQUEST);
    }

    const question = await this.prisma.question.delete({where: {id: dto.id}});

    return question;
  }

  async getQuestionsByTestId(testId: number) {
    const questions = await this.prisma.question.findMany({where: {testId: testId}});
    return questions;
  }
}
