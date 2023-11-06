import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {CreateTestDto} from "./dto/createTest.dto";
import {UpdateTestDto} from "./dto/updateTest.dto";
import {QuestionsService} from "../questions/questions.service";

@Injectable()
export class TestsService {
  constructor(private prisma: PrismaService) {}

  async createTest(dto: CreateTestDto, userId: number) {
    const test = await this.prisma.test.create({
      data: {
        title: dto.title,
        userId: userId,
      }
    })
    return test;
  }

  async updateTest(dto: UpdateTestDto, userId: number) {
    const test = await this.prisma.test.update({
      where: {
        id: dto.id,
        userId: userId
      },
      data: {
        title: dto.title,
      },
    })

    return test;
  }

  async getAllUserTests(userId: number) {
    const tests = await this.prisma.test.findMany({where: {userId: userId}})
    return tests;
  }

  async getTestById(testId: number) {
    const test = await this.prisma.test.findFirst({where: {id: testId}});
    const questions = await this.prisma.question.findMany({where: {testId: testId}});

    const questionsWithAnswers = await Promise.all(questions.map(async (q) => {
      const answers = await this.prisma.answer.findMany({ where: { questionId: q.id } });
      return {
        ...q,
        answers
      }
    }));

    console.log(questionsWithAnswers);

    return {
      ...test,
      question: questionsWithAnswers,
    };
  }

}
