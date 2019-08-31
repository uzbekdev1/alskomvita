import {Controller, Get, Param, ParseIntPipe} from '@nestjs/common';
import {Observable} from 'rxjs';
import {BranchesService} from './branches.service';
import {BranchEntity} from './branch.entity';
import {ApiImplicitParam, ApiUseTags} from '@nestjs/swagger';

@ApiUseTags('branches')
@Controller('branches')
//@ApiBearerAuth()
export class BranchesController {

    constructor(private   branchesService: BranchesService) {
    }

    @Get()
    getAll(): Observable<BranchEntity[]> {
        return this.branchesService.getAll();
    }

    @Get(':id')
    @ApiImplicitParam({name: 'id'})
    getItem(@Param('id', new ParseIntPipe()) id) {
        return this.branchesService.getItem(id);
    }

}
