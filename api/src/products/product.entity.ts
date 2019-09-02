import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity("products")
export class ProductEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 250})
    name: string;

    @Column({type: 'text'})
    description: string;

    @Column({type: "boolean", name: "is_active"})
    isActive: boolean;

    @Column({length: 250})
    image: string;

}
