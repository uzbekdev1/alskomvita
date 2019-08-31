import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {VacanciesModule} from './vacancies/vacancies.module';
import {ProductsModule} from './products/products.module';
import {BranchesModule} from './branches/branches.module';
import {NewsModule} from "./news/news.module";

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        ProductsModule,
        VacanciesModule,
        BranchesModule,
        NewsModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
