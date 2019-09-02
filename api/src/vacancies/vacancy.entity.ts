import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("vacancies")
export class VacancyEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  position: string;

  @Column({ length: 120 })
  department: string;

  @Column({ type: "text" })
  requirements: string;

  @Column({ length: 250, name: "place_of_work" })
  placeOfWork: string;

}
