import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('partners')
export class PartnerEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  name: string;

  @Column({ length: 250 })
  image: string;

  @Column({ name: 'language_id', nullable: true })
  languageId: number;

}
