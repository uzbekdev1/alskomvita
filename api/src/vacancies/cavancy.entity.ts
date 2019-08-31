import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity("vacancies")
export class Vacancy {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 250})
    title: string;

    @Column({type: "date"})
    date: Date;

    @Column({type: "text"})
    description: string;

}
