import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("languages")
export class LanguageEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  code: string;

  @Column({ length: 50 })
  locale: string;

}
