import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TestsModule } from './tests/tests.module';
import { AuthModule } from './auth/auth.module';
import { CompletedTestsModule } from './completed-tests/completed-tests.module';
import { AnswersModule } from './answers/answers.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [UsersModule, TestsModule, AuthModule, CompletedTestsModule, AnswersModule, QuestionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
