import {Controller, Get, Param, ParseIntPipe, Query} from '@nestjs/common';
import {Observable} from 'rxjs';
import {Agent} from './agent.entity';
import {AgentsService} from './agents.service';
import {ApiBearerAuth, ApiImplicitParam, ApiImplicitQuery, ApiUseTags} from '@nestjs/swagger';

@ApiUseTags('agents')
@Controller('agents')
//@ApiBearerAuth()
export class AgentsController {
    constructor(private readonly agentsService: AgentsService) {
    }

    @Get()
    getAllAgents(): Observable<Agent[]> {
        return this.agentsService.findAll();
    }

    @Get(':id')
    @ApiImplicitParam({name: 'id'})
    getAgent(@Param('id', new ParseIntPipe()) id) {
        return this.agentsService.getAgent(id);
    }
}
