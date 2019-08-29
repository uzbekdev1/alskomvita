import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BranchesService } from './branches.service';
import { Branch } from './branch.entity';
import {ApiImplicitParam, ApiUseTags} from '@nestjs/swagger';

@ApiUseTags('branches')
@Controller('branches')
//@ApiBearerAuth()
export class BranchesController {
  constructor(private readonly branchesService: BranchesService) {
  }

  @Get()
  getAllBranches(): Observable<Branch[]> {
    return this.branchesService.findAll();
  }

  @Get(':id')
  @ApiImplicitParam({name: 'id'})
  getBranch(@Param('id', new ParseIntPipe()) id) {
    return this.branchesService.getBranch(id);
  }

}
