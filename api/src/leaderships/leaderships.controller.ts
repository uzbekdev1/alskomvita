import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Observable } from 'rxjs';
import { LeadershipsService } from './leaderships.service';
import { LeadershipEntity } from './leadership.entity';
import { ApiImplicitParam, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('leaderships')
@Controller('leaderships')
//@ApiBearerAuth()
export class LeadershipsController {

  constructor(private   leadershipsService: LeadershipsService) {
  }

  @Get(':lang')
  @ApiImplicitParam({ name: 'lang' })
  getAll(@Param('lang', new ParseIntPipe()) lang): Observable<LeadershipEntity[]> {
    return this.leadershipsService.getAll(lang);
  }

  @Get(':id')
  @ApiImplicitParam({ name: 'id' })
  getItem(@Param('id', new ParseIntPipe()) id) {
    return this.leadershipsService.getItem(id);
  }

}
