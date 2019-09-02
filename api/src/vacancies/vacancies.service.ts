import {Injectable} from '@nestjs/common';
import {VacancyEntity} from './vacancy.entity';
import {from, Observable} from 'rxjs';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class VacanciesService {

    constructor(
        @InjectRepository(VacancyEntity)
        private readonly vacancyRepository: Repository<VacancyEntity>) {
    }

    getAll(): Observable<VacancyEntity[]> {
        return from(this.vacancyRepository.find());
    }

    getItem(id: number) {
        return this.vacancyRepository.findOne(id);
    }

}
