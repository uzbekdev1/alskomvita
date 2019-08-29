import { Branch } from './branch.entity';
import { Repository } from 'typeorm';
import { Observable } from 'rxjs';
export declare class BranchesService {
    private readonly branchRepository;
    constructor(branchRepository: Repository<Branch>);
    findAll(): Observable<Branch[]>;
    getBranch(id: number): Promise<Branch>;
}
