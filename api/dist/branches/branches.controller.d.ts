import { Observable } from 'rxjs';
import { BranchesService } from './branches.service';
import { Branch } from './branch.entity';
export declare class BranchesController {
    private readonly branchesService;
    constructor(branchesService: BranchesService);
    getAllBranches(): Observable<Branch[]>;
    getBranch(id: any): Promise<Branch>;
}
