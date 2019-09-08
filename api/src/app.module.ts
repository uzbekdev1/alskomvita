import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VacanciesModule } from './vacancies/vacancies.module';
import { ProductsModule } from './products/products.module';
import { BranchesModule } from './branches/branches.module';
import { NewsModule } from './news/news.module';
import { LeadershipsModule } from './leaderships/leaderships.module';
import { LanguagesModule } from './languages/languages.module';
import { PartnersModule } from './partners/partners.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    LanguagesModule,
    ProductsModule,
    VacanciesModule,
    BranchesModule,
    NewsModule,
    LeadershipsModule,
    PartnersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
