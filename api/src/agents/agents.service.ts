import { Injectable } from '@nestjs/common';
import { Agent } from './agent.entity';
import { from, Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AgentsService {
  constructor(
    @InjectRepository(Agent)
    private readonly agentRepository: Repository<Agent>,
  ) {
  }

  public findAll(): Observable<Agent[]> {
    return from(this.agentRepository.find());
  }

  public getAgent(id: number) {
    return this.agentRepository.findOne(id);
  }

}
