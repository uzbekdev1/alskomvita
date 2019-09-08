import { Module } from '@nestjs/common';
import { VacanciesController } from './vacancies.controller';
import { VacanciesService } from './vacancies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacancyEntity } from './vacancy.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([VacancyEntity]),
  ],
  controllers: [
    VacanciesController,
  ],
  providers: [
    VacanciesService,
  ],
})
export class VacanciesModule {
}
