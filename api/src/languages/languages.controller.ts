import { Controller, Get, Param } from "@nestjs/common";
import { Observable } from "rxjs";
import { LanguagesService } from "./languages.service";
import { ApiImplicitParam, ApiUseTags } from "@nestjs/swagger";
import { LanguageEntity } from "./language.entity";

@ApiUseTags("languages")
@Controller("languages")
//@ApiBearerAuth()
export class LanguagesController {
  constructor(private vacanciesService: LanguagesService) {
  }

  @Get()
  getAll(): Observable<LanguageEntity[]> {
    return this.vacanciesService.getAll();
  }

  @Get(":code")
  @ApiImplicitParam({ name: "code" })
  getItem(@Param("code") code) {
    return this.vacanciesService.getItem(code);
  }
}
