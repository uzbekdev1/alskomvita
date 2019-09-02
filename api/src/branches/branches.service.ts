import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BranchEntity } from './branch.entity';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';

@Injectable()
export class BranchesService {

  constructor(
    @InjectRepository(BranchEntity)
    private  branchRepository: Repository<BranchEntity>) {
  }

  getAll(lang: number): Observable<BranchEntity[]> {
    return from(this.branchRepository.find({ languageId: lang }));
  }

  getItem(id: number) {
    return this.branchRepository.findOne(id);
  }

}
