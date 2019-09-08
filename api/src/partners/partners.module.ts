import { Module } from '@nestjs/common';
import { PartnersController } from './partners.controller';
import { PartnersService } from './partners.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartnerEntity } from './partner.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PartnerEntity]),
  ],
  controllers: [
    PartnersController,
  ],
  providers: [
    PartnersService,
  ],
})
export class PartnersModule {
}
