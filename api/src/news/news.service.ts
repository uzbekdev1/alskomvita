import { Injectable } from '@nestjs/common';
import { NewsEntity } from './news.entity';
import { from, Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NewsService {

  constructor(
    @InjectRepository(NewsEntity)
    private readonly vacancyRepository: Repository<NewsEntity>) {
  }

  getAll(lang: number): Observable<NewsEntity[]> {
    return from(this.vacancyRepository.find({
      languageId: lang,
      isPublished: true
    }));
  }

  getItem(id: number) {
    return this.vacancyRepository.findOne(id);
  }

}
