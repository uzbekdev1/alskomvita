import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity("products")
export class ProductEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    name: string;

    @Column({type: 'text'})
    description: string;

    @Column({type: "decimal"})
    price: string;

    @Column({type: "boolean", name: "is_active"})
    isActive: boolean;

}
