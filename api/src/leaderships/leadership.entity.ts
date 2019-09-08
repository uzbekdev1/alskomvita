import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('leaderships')
export class LeadershipEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120, name: 'full_name' })
  fullName: string;

  @Column({ length: 250, name: 'job_title' })
  jobTitle: string;

  @Column({ length: 250 })
  education: string;

  @Column({ length: 50, nullable: true })
  phone: string;

  @Column({ length: 50, nullable: true })
  email: string;

  @Column({ type: 'date', name: 'date_of_birth' })
  dateOfBirth: Date;

  @Column({ type: 'text' })
  experience: string;

  @Column({ length: 250 })
  image: string;

  @Column({ name: 'language_id', nullable: true })
  languageId: number;

}
