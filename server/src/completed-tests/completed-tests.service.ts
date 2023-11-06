import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {CreateCompletedTestDto} from "./dto/createCompletedTest.dto";

@Injectable()
export class CompletedTestsService {
  constructor(private prisma: PrismaService ) {}

  async getAllCompletedTests(userId: number) {
    const tests = await this.prisma.completedTest.findMany({where: {userId: userId}});
    return tests;
  }


  async createCompletedTest(dto: CreateCompletedTestDto, userId: number) {
    const test = await this.prisma.completedTest.create({
      data: {
        ...dto,
        userId: userId
      }
    })

    return test;
  }
}
