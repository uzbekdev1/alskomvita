import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Observable } from 'rxjs';
import { NewsEntity } from './news.entity';
import { NewsService } from './news.service';
import { ApiImplicitParam, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('news')
@Controller('news')
//@ApiBearerAuth()
export class NewsController {
  constructor(private vacanciesService: NewsService) {
  }

  @Get(':lang')
  @ApiImplicitParam({ name: 'lang' })
  getAll(@Param('lang', new ParseIntPipe()) lang): Observable<NewsEntity[]> {
    return this.vacanciesService.getAll(lang);
  }

  @Get(':id')
  @ApiImplicitParam({ name: 'id' })
  getItem(@Param('id', new ParseIntPipe()) id) {
    return this.vacanciesService.getItem(id);
  }

}
