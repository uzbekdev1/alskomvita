import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiImplicitParam, ApiUseTags } from '@nestjs/swagger';
import { PartnersService } from './partners.service';
import { PartnerEntity } from './partner.entity';

@ApiUseTags('partners')
@Controller('partners')
//@ApiBearerAuth()
export class PartnersController {

  constructor(private partnersService: PartnersService) {
  }

  @Get(':lang')
  @ApiImplicitParam({ name: 'lang' })
  getAll(@Param('lang', new ParseIntPipe()) lang): Observable<PartnerEntity[]> {
    return this.partnersService.getAll(lang);
  }

  @Get(':id')
  @ApiImplicitParam({ name: 'id' })
  getItem(@Param('id', new ParseIntPipe()) id) {
    return this.partnersService.getItem(id);
  }

}
