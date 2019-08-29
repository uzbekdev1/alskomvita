import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column('text')
  description: string;

  @Column()
  price: string;

  @Column()
  isActive: boolean;
}
