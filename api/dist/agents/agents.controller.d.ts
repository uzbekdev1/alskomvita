import { Observable } from 'rxjs';
import { Agent } from './agent.entity';
import { AgentsService } from './agents.service';
export declare class AgentsController {
    private readonly agentsService;
    constructor(agentsService: AgentsService);
    getAllAgents(): Observable<Agent[]>;
    getAgent(id: any): Promise<Agent>;
}
