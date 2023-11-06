import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {CreateTestDto} from "./dto/createTest.dto";
import {UpdateTestDto} from "./dto/updateTest.dto";

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

  async getTestById(id: number) {
    const test = await this.prisma.test.findFirst({where: {id: id}});
    return {
      ...test,
    };
  }

}
