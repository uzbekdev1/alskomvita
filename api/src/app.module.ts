import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgentsModule } from './agents/agents.module';
import { ProductsModule } from './products/products.module';
import { BranchesModule } from './branches/branches.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ProductsModule,
    AgentsModule,
    BranchesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

  constructor() {
    console.log('Main module got loaded');
  }

}
