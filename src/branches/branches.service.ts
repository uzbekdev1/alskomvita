import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Branch } from '../entities/branch.entity';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';
import { BranchDto } from '../dtos/branchDto';

@Injectable()
export class BranchesService {
    constructor(
        @InjectRepository(Branch)
        private readonly branchRepository: Repository<Branch>,
    ) {}

    public findAll(): Observable<Branch[]> {
        return from(this.branchRepository.find());
    }

    public getBranch(id: number) {
        return this.branchRepository.findOne(id);
    }

    public createNewBranch(branch: BranchDto) {
        this.branchRepository.save(branch);
    }

    public updateBranch(id: number, branch: Branch) {
        branch.id = id;
        this.branchRepository.save(branch);

        return branch;
    }

    public deleteBranch(id: number) {
        this.branchRepository.delete(id);
    }

}
