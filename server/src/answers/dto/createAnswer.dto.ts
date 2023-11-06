export class CreateAnswerDto {
  readonly value: string;
  readonly correct: boolean;
  readonly questionId: number;
}