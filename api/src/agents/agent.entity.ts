import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Agent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  fullName: string;

  @Column()
  phone: string;

}
