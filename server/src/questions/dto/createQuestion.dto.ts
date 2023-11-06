import {QuestionTypes} from "@prisma/client";

export class CreateQuestionDto {
  title: string
  photo: string | null
  type: QuestionTypes
  testId: number
}