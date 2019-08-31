import { Module } from '@nestjs/common';
import { VacanciesController } from './vacancies.controller';
import { VacanciesService } from './vacancies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vacancy } from './cavancy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vacancy])],
  controllers: [VacanciesController],
  providers: [VacanciesService],
})
export class VacanciesModule {
}
