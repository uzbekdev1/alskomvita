import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {LeadershipEntity} from './leadership.entity';
import {Repository} from 'typeorm';
import {from, Observable} from 'rxjs';

@Injectable()
export class LeadershipsService {

    constructor(
        @InjectRepository(LeadershipEntity)
        private  branchRepository: Repository<LeadershipEntity>) {
    }

    getAll(): Observable<LeadershipEntity[]> {
        return from(this.branchRepository.find());
    }

    getItem(id: number) {
        return this.branchRepository.findOne(id);
    }

}
