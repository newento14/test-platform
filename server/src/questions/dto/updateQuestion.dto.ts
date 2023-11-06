import {QuestionTypes} from "@prisma/client";

export class UpdateQuestionDto {
  id: number
  title: string
  photo: string | null
  type: QuestionTypes
  testId: number
}