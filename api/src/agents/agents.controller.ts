import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Agent } from './agent.entity';
import { AgentsService } from './agents.service';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';

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
  getAgent(@Param('id', new ParseIntPipe()) id) {
    return this.agentsService.getAgent(id);
  }
}
