import { Module } from "@nestjs/common";
import { LanguagesService } from "./languages.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LanguagesController } from "./languages.controller";
import { LanguageEntity } from "./language.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([LanguageEntity])
  ],
  controllers: [
    LanguagesController
  ],
  providers: [
    LanguagesService
  ]
})
export class LanguagesModule {
}
