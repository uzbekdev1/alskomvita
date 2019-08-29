import { Controller, Get, Param, ParseIntPipe, Post, Body, Delete, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BranchesService } from './branches.service';
import { BranchDto } from '../dtos/branchDto';
import { Branch } from '../entities/branch.entity';

@Controller('api/branches')
export class BranchesController {
    constructor(private readonly branchesService: BranchesService) {}

    @Get()
    getAllBranches(): Observable<Branch[]> {
        return this.branchesService.findAll();
    }
    @Get(':id')
    getBranch(@Param('id', new ParseIntPipe()) id) {
        return this.branchesService.getBranch(id);
    }
    @Post()
    createNewBranch(@Body() branch: BranchDto) {
        return this.branchesService.createNewBranch(branch);
    }

    @Delete(':id')
    deleteBranch(@Param('id') id) {
        return this.branchesService.deleteBranch(id);
    }

    @Put(':id')
    updateBranch(@Param('id', new ParseIntPipe()) id, @Body() branch: Branch) {
        return this.branchesService.updateBranch(id, branch);
    }
}
