import {Injectable} from '@nestjs/common';
import {Vacancy} from './cavancy.entity';
import {from, Observable} from 'rxjs';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class VacanciesService {

    constructor(
        @InjectRepository(Vacancy)
        private readonly vacancyRepository: Repository<Vacancy>) {
    }

    getAll(): Observable<Vacancy[]> {
        return from(this.vacancyRepository.find());
    }

    getItem(id: number) {
        return this.vacancyRepository.findOne(id);
    }

}
