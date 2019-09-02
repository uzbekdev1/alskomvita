import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity("news")
export class NewsEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 250})
    title: string;

    @Column({type: "date"})
    date: Date;

    @Column({type: "text"})
    description: string;

    @Column({type: "boolean", name: "is_published"})
    isPublished: boolean;

    @Column({length: 250})
    image: string;

}
