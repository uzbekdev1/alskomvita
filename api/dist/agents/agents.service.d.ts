import { Agent } from './agent.entity';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
export declare class AgentsService {
    private readonly agentRepository;
    constructor(agentRepository: Repository<Agent>);
    findAll(): Observable<Agent[]>;
    getAgent(id: number): Promise<Agent>;
}
