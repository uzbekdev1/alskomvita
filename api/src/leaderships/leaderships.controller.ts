import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { Observable } from "rxjs";
import { LeadershipsService } from "./leaderships.service";
import { LeadershipEntity } from "./leadership.entity";
import { ApiImplicitParam, ApiUseTags } from "@nestjs/swagger";

@ApiUseTags("leaderships")
@Controller("leaderships")
//@ApiBearerAuth()
export class LeadershipsController {

  constructor(private   leadershipsService: LeadershipsService) {
  }

  @Get()
  getAll(): Observable<LeadershipEntity[]> {
    return this.leadershipsService.getAll();
  }

  @Get(":id")
  @ApiImplicitParam({ name: "id" })
  getItem(@Param("id", new ParseIntPipe()) id) {
    return this.leadershipsService.getItem(id);
  }

}
