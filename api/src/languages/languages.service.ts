import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LanguageEntity } from './language.entity';

@Injectable()
export class LanguagesService {

  constructor(
    @InjectRepository(LanguageEntity)
    private readonly languageRepository: Repository<LanguageEntity>) {
  }

  getAll(): Observable<LanguageEntity[]> {
    return from(this.languageRepository.find());
  }

  getItem(code: string) {
    return this.languageRepository.findOne({
      code: code,
    });
  }

}
