import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity("branches")
export class BranchEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;

    @Column({type: 'text'})
    contact: string;

    @Column({length: 250})
    image: string;

}
