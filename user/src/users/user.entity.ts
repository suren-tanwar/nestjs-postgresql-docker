import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  uid: string;

  @Column('text', {nullable: true})
  firstName: string;

  @Column('text', {nullable: true})
  lastName: string;

  @Column({ default: true })
  isActive: boolean;
}



