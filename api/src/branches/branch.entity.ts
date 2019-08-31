import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity("branches")
export class BranchEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;

    @Column({length: 250})
    address: string;

    @Column({length: 25})
    phone: string;

}
