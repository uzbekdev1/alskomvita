import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { PartnerEntity } from './partner.entity';

@Injectable()
export class PartnersService {

  constructor(
    @InjectRepository(PartnerEntity)
    private  partnerRepository: Repository<PartnerEntity>) {
  }

  getAll(lang: number): Observable<PartnerEntity[]> {
    return from(this.partnerRepository.find({ languageId: lang }));
  }

  getItem(id: number) {
    return this.partnerRepository.findOne(id);
  }

}
