import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vacancies')
export class VacancyEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  position: string;

  @Column({ length: 120, nullable: true })
  department: string;

  @Column({ type: 'text' })
  requirements: string;

  @Column({ name: 'language_id', nullable: true })
  languageId: number;

  @Column({ name: 'is_visible', nullable: true, type: 'boolean' })
  isVisible: boolean;
}
