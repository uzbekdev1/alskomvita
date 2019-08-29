import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Branch } from './branch.entity';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';

@Injectable()
export class BranchesService {
  constructor(
    @InjectRepository(Branch)
    private readonly branchRepository: Repository<Branch>,
  ) {
  }

  public findAll(): Observable<Branch[]> {
    return from(this.branchRepository.find());
  }

  public getBranch(id: number) {
    return this.branchRepository.findOne(id);
  }

}
