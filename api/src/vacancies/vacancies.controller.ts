import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Observable } from 'rxjs';
import { VacancyEntity } from './vacancy.entity';
import { VacanciesService } from './vacancies.service';
import { ApiImplicitParam, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('vacancies')
@Controller('vacancies')
//@ApiBearerAuth()
export class VacanciesController {
  constructor(private vacanciesService: VacanciesService) {
  }

  @Get(':lang')
  @ApiImplicitParam({ name: 'lang' })
  getAll(@Param('lang', new ParseIntPipe()) lang): Observable<VacancyEntity[]> {
    return this.vacanciesService.getAll(lang);
  }

  @Get(':id')
  @ApiImplicitParam({ name: 'id' })
  getItem(@Param('id', new ParseIntPipe()) id) {
    return this.vacanciesService.getItem(id);
  }
}
