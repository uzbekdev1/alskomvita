import { Controller, Get, Param, ParseIntPipe, Post, Body, Delete, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Agent } from '../entities/agent.entity';
import { AgentDto } from '../dtos/agentDto';
import { AgentsService } from './agents.service';

@Controller('api/agents')
export class AgentsController {
    constructor(private readonly agentsService: AgentsService) {}

    @Get()
    getAllAgents(): Observable<Agent[]> {
        return this.agentsService.findAll();
    }
    @Get(':id')
    getAgent(@Param('id', new ParseIntPipe()) id) {
        return this.agentsService.getAgent(id);
    }
    @Post()
    createNewAgent(@Body() agent: AgentDto) {
        return this.agentsService.createNewAgent(agent);
    }

    @Delete(':id')
    deleteAgent(@Param('id') id) {
        return this.agentsService.deleteAgent(id);
    }

    @Put(':id')
    updateAgent(@Param('id', new ParseIntPipe()) id, @Body() agent: Agent) {
        return this.agentsService.updateAgent(id, agent);
    }
}
