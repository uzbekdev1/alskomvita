import {Injectable} from '@nestjs/common';
import {NewsEntity} from './news.entity';
import {from, Observable} from 'rxjs';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class NewsService {

    constructor(
        @InjectRepository(NewsEntity)
        private readonly vacancyRepository: Repository<NewsEntity>) {
    }

    getAll(): Observable<NewsEntity[]> {
        return from(this.vacancyRepository.find());
    }

    getItem(id: number) {
        return this.vacancyRepository.findOne(id);
    }

}
