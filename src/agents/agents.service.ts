import { Injectable } from '@nestjs/common';
import { Agent } from '../entities/agent.entity';
import { AgentDto } from '../dtos/agentDto';
import { from, Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AgentsService {
    constructor(
        @InjectRepository(Agent)
        private readonly agentRepository: Repository<Agent>,
      ) {}
     public findAll(): Observable<Agent[]> {
        return  from(this.agentRepository.find());
      }

     public getAgent(id: number) {
          return this.agentRepository.findOne(id);
      }

      public createNewAgent(agent: AgentDto) {
          return this.agentRepository.save(
              agent,
          );
      }

      updateAgent(id: number, agent: Agent ) {
          agent.id = id;
          this.agentRepository.save(agent);
          return agent;
      }

      deleteAgent(id: number) {
          this.agentRepository.delete(id);
      }
}
