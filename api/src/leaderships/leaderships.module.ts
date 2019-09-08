import { Module } from '@nestjs/common';
import { LeadershipsController } from './leaderships.controller';
import { LeadershipsService } from './leaderships.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadershipEntity } from './leadership.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([LeadershipEntity]),
  ],
  controllers: [
    LeadershipsController,
  ],
  providers: [
    LeadershipsService,
  ],
})
export class LeadershipsModule {
}
