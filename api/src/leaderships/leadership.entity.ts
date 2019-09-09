import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('leaderships')
export class LeadershipEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120, name: 'full_name' })
  fullName: string;

  @Column({ length: 250, name: 'job_title' })
  jobTitle: string;

  @Column({ type: 'text' })
  information: string;

  @Column({ length: 250 })
  image: string;

  @Column({ name: 'language_id', nullable: true })
  languageId: number;

}
